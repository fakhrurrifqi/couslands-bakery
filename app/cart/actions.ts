"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function addToCartAction(productId: string) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      success: false,
      message: "You must be logged in to add items to the cart.",
    };
  }

  try {
    const { data: existingCartItem, error: fetchError } = await supabase
      .from("carts")
      .select("id, quantity")
      .eq("user_id", user.id)
      .eq("product_id", productId)
      .single();

    if (fetchError && fetchError.code !== "PGRST116") {
      throw fetchError;
    }

    if (existingCartItem) {
      const newQuantity = existingCartItem.quantity + 1;
      const { error: updateError } = await supabase
        .from("carts")
        .update({ quantity: newQuantity })
        .eq("id", existingCartItem.id);
      if (updateError) throw updateError;
    } else {
      const { error: insertError } = await supabase.from("carts").insert({
        user_id: user.id,
        product_id: productId,
        quantity: 1,
      });
      if (insertError) throw insertError;
    }

    revalidatePath("/");
    revalidatePath("/cart");

    return { success: true, message: "Item added to cart!" };
  } catch (error) {
    console.error("Error adding to cart:", error);
    return { success: false, message: "Could not add item to cart." };
  }
}

export async function removeFromCartAction(cartItemId: number) {
  const supabase = await createClient();
  const { error } = await supabase.from("carts").delete().eq("id", cartItemId);

  if (error) {
    console.error("Error removing from cart:", error);
    return { success: false, message: "Could not remove item from cart." };
  }

  revalidatePath("/cart");
  revalidatePath("/");

  return { success: true, message: "Item removed from cart." };
}

export async function updateCartQuantityAction(
  cartItemId: number,
  quantity: number
) {
  const supabase = await createClient();

  if (quantity <= 0) {
    const { error } = await supabase
      .from("carts")
      .delete()
      .eq("id", cartItemId);
    if (error) {
      console.error("Error removing from cart:", error);
      return { success: false, message: "Could not remove item from cart." };
    }
  } else {
    const { error } = await supabase
      .from("carts")
      .update({ quantity })
      .eq("id", cartItemId);

    if (error) {
      console.error("Error updating cart quantity:", error);
      return { success: false, message: "Could not update item quantity." };
    }
  }

  revalidatePath("/cart");
  revalidatePath("/");

  return { success: true, message: "Cart updated." };
}

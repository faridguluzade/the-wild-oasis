import supabase, { supabaseUrl } from "./supabase";

// GET ALL CABIN
export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

// CREATE CABIN
export async function createCabin(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Upload image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (storageError) {
    console.log(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not edited"
    );
  }

  // 2. Create cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be created");
  }

  return data;
}

// EDIT CABIN
export async function editCabin(newCabin, id) {
  const hasImage = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImage
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Upload image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (storageError) {
    console.log(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not edited"
    );
  }

  // 2 .Edit cabin
  const { data, error } = await supabase
    .from("cabins")
    .update([{ ...newCabin, image: imagePath }])
    .eq("id", id)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be edited");
  }

  return data;
}

// DELETE CABIN
export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }

  return data;
}

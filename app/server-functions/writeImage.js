'use server'
import fs from "fs/promises"
import { revalidatePath } from "next/cache";
export const writeImage = async (fileName,buffer) => {

    await fs.writeFile(`../../public/${fileName}`, buffer)

    revalidatePath("/testpage")

}
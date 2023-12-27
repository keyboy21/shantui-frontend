import { BASE_URL } from "@/configs/env.config";
import { Categories, Category } from "@/types/api.types";

export async function getBulldozerCategories(): Promise<Category[]> {
    const res = await fetch(`${BASE_URL}/api/stc`, {
        next: { revalidate: 86400 },
    });
    if (!res.ok) {
        return [];
    }

    const data: Categories = await res.json();
    return data.data;
}
import { accessoriesCategories } from "@/app/data-catgory/accessoriesCategories";
import { categories } from "@/app/data-catgory/categories";

import Header from "./componet/home-desgine/header";
import CategoryShowcase from "@/app/componet/home-desgine/Category_Showcase";
import RoomDesgein from "@/app/componet/home-desgine/RoomDesgein";
import Features from "@/app/componet/home-desgine/Features";

export default function Home() {
  return (
    <main className="bg-black">
      {/* Hero Section */}
      <Header />

      {/* Category Show - First */}
      <CategoryShowcase categories={categories} />

      {/* Room Design Section */}
      <RoomDesgein />

      {/* Features / Trust Section */}
      <Features />

      {/* Category Show - Second */}
      <CategoryShowcase categories={accessoriesCategories} />
    </main>
  );
}
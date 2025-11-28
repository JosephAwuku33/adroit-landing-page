import { brands } from "../data/brands";

export default function Brands() {
  return (
    <section className="w-full font-inter py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-16 items-center justify-center w-full">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-center">
              Trusted by major brands in Africa and beyond
            </h2>
            <p className="text-center">
              Our team has delivered platforms and products for some of the
              largest organizations in Ghana and the region.
            </p>
          </div>

          {/* icon brands */}
          <div className="flex items-center space-x-12">
            {brands.map((brand) => (
              <img
                key={brand.name}
                src={brand.imgUrl}
                alt={brand.name}
                className="h-20 object-contain opacity-70 hover:opacity-100 transition duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

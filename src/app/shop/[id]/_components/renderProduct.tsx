import React from "react";
import Image from "next/image";
import { ProductType } from "@/zustand/shop/shopStore";
import { MdStar } from "react-icons/md";
import ProductAddToCart from "./productAddToCart";
import { Heading } from "@/app/_components/heading";
import { Text } from "@/app/_components/text";

type props = {
  product: ProductType;
};

export default function RenderProduct({ product }: props) {
  return (
    <div className="flex h-[70dvh] items-start justify-between gap-4">
      <div className="h-full flex-1 overflow-hidden rounded-lg p-4">
        <Image
          src={product.image}
          height={1024}
          width={1024}
          alt={product.productTitle}
          className="mx-auto h-full w-auto rounded-lg"
        />
      </div>
      <div className="flex h-full flex-1 flex-col items-start justify-between pt-4">
        <div className="flex flex-col items-start justify-start space-y-4 pt-4">
          <Heading >{product.productTitle}</Heading>
          <div className="flex items-center justify-center gap-4 pb-4">
            <div className="flex items-center justify-center gap-2">
              <MdStar size={20} className="text-yellow-500" />
              <MdStar size={20} className="text-yellow-500" />
              <MdStar size={20} className="text-yellow-500" />
              <MdStar size={20} className="text-yellow-500" />
              <MdStar size={20} className="text-gray-600" />
            </div>
            <Text size="s" className="text-slate-600">
              Review (102)
            </Text>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Text size="lg" className="font-semibold text-gray-600/90">
              Product Type :
            </Text>
            <Text size="xl" className="font-semibold">
              {product.category}
            </Text>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Text size="lg" className="font-semibold text-gray-600/90">
              Available Color(s) :
            </Text>
            <Text size="xl" className="font-semibold">
              {product.color}
            </Text>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Text size="lg" className="font-semibold text-gray-600/90">
              Theme :
            </Text>
            <Text size="xl" className="font-semibold">
              {product.tag}
            </Text>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Text size="lg" className="font-semibold text-gray-600/90">
              Price :
            </Text>
            <Text size="xl" className="font-semibold">
              ${product.price}
            </Text>
          </div>

          <div className="flex flex-col items-start justify-start gap-2">
            <Text size="lg" className="font-semibold text-gray-600/90">
              More Details :
            </Text>
            <Text size="md" className="line-clamp-[10] h-[20.4dvh]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae,
              nam! Ullam laboriosam assumenda consequatur ipsam, explicabo
              laudantium in odio illum! Eveniet in minus dolor sapiente,
              repellendus, vel debitis dolorem ipsam voluptate libero repellat
              aliquam omnis saepe laboriosam incidunt voluptatibus, mollitia
              porro! Rem inventore quam nam voluptas? Nostrum fugiat sequi
              rerum? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Nemo repellendus quibusdam laudantium quae quo saepe esse,
              molestias officiis rem dolor pariatur vel nobis eveniet ut quaerat
              delectus accusamus animi ullam? Assumenda corrupti ipsum natus.
              Minus enim assumenda a eveniet aut incidunt dolores,
              necessitatibus perspiciatis animi, et recusandae nulla. Dolore
              deserunt doloribus a molestias architecto perferendis est
              laboriosam error, sint, ex rem consequatur libero quidem
              repudiandae inventore quo repellat exercitationem sunt accusantium
              tenetur blanditiis nemo accusamus. Accusantium dolorum sed illum
              quaerat voluptas velit laboriosam perferendis, maxime deserunt
              porro odio vitae dolor maiores ad harum soluta. Beatae perferendis
              vero blanditiis tenetur distinctio doloribus non eveniet dolor,
              laborum architecto expedita quisquam amet nemo at nisi natus
              error, aperiam dolores cum quaerat iusto assumenda corrupti
              asperiores aliquid. Nam quae impedit temporibus beatae, culpa
              porro commodi inventore cum assumenda. Alias dignissimos
              reiciendis corporis esse quod aperiam dolorem laborum sunt optio,
              cupiditate laboriosam ipsa ducimus quam nemo corrupti sit?
              Excepturi provident corrupti dolores est maxime doloribus eligendi
              sequi, delectus ut quaerat voluptas ipsam vel labore voluptatum
              doloremque pariatur dolorem dolorum minus illum vero officia
              voluptatem alias ipsa nesciunt! Excepturi corrupti tempora
              deserunt ut, aut repellendus perferendis assumenda, ducimus nemo,
              voluptas aperiam eum fugiat reiciendis quaerat voluptatum.
            </Text>
          </div>
        </div>

        <ProductAddToCart product={product} />
      </div>
    </div>
  );
}

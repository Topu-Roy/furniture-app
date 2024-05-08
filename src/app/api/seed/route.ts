import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { getUserByAuthId } from "@/server/queries";

// ! Used this to seed the database
// ! Not needed after the seed has been executed

async function POST() {
    try {
        const user = await currentUser()

        //* Validate the user
        if (user === null) return NextResponse.json({ message: "Not Authenticated" })

        const id = user.id;
        const dbUser = await getUserByAuthId(user.id);

        if (!dbUser) return NextResponse.json({ message: "Not found in DB" })
        if (dbUser.role !== 'ADMIN') return NextResponse.json({ message: "Operation not Allowed" })

        const seedDB = await db.product.createMany({
            data: [
                {
                    createdBy: '',
                    description: "",
                    productTitle: "Adjustable Office Chair",
                    image: "/products/Chair - Black - Adjustable Office Chair.jpg",
                    price: 159,
                    status: "New",
                    category: "Chair",
                    tag: "Modern",
                    color: "Black"
                },
                {
                    createdBy: '',
                    description: "",
                    productTitle: "Rustic Wooden Dining Table",
                    image: "/products/Table - Brown - Rustic Wooden Dining Table (1).jpg",
                    price: 849,
                    status: "Popular",
                    category: "Table",
                    tag: "Stylish",
                    color: "Brown"
                },
                {
                    createdBy: '',
                    description: "",
                    productTitle: "Contemporary Floor Lamp",
                    image: "/products/Lamp - Black - Contemporary Floor Lamp (1).jpg",
                    price: 1299,
                    status: "Popular",
                    category: "Lamp",
                    tag: "Ambient",
                    color: "Black"
                },
                {
                    createdBy: '',
                    description: "",
                    productTitle: "Compact Nightstand",
                    image: "/products/Drawer - Brown - Compact Nightstand (1).jpg",
                    price: 499,
                    status: "Popular",
                    category: "Drawer",
                    tag: "Minimalistic",
                    color: "Brown"
                },
                {
                    createdBy: '',
                    description: "",
                    productTitle: "Queen Size Canopy Bed",
                    image: "/products/Bed - Brown - Queen Size Canopy Bed (1).jpg",
                    price: 1499,
                    status: "Popular",
                    category: "Bed",
                    tag: "Luxurious",
                    color: "Brown"
                },
                {
                    createdBy: '',
                    description: "",
                    productTitle: "Classic Bookshelf",
                    image: "/products/Bookshelf - Brown - Contemporary Bookcase (1).jpg",
                    price: 479,
                    status: "New",
                    category: "Bookshelf",
                    tag: "Modern",
                    color: "Brown"
                },
                {
                    createdBy: '',
                    description: "",
                    productTitle: "L-shaped Sectional Sofa",
                    image: "/products/Sofa - White - L-shaped Sectional Sofa.jpg",
                    price: 799,
                    status: "Popular",
                    category: "Sofa",
                    tag: "Elegant",
                    color: "White"
                },
                {
                    createdBy: '',
                    description: "",
                    productTitle: "Classic Rocking Chair",
                    image: "/products/Chair - Brown - Classic Rocking Chair (1).jpg",
                    price: 189,
                    status: "New",
                    category: "Chair",
                    tag: "Stylish",
                    color: "Brown"
                },
                {
                    createdBy: '',
                    description: "",
                    productTitle: "Glass Top Coffee Table",
                    image: "/products/Table - Brown - Glass Top Coffee Table (2).jpg",
                    price: 349,
                    status: "Popular",
                    category: "Table",
                    tag: "Minimalistic",
                    color: "Brown"
                },
                {
                    createdBy: '',
                    description: "",
                    productTitle: "Vintage Desk Lamp",
                    image: "/products/Lamp - Black - Vintage Desk Lamp (1).jpg",
                    price: 899,
                    status: "New",
                    category: "Lamp",
                    tag: "Ambient",
                    color: "Black"
                },
                {
                    createdBy: '',
                    description: "",
                    productTitle: "Spacious Chest of Drawers",
                    image: "/products/Drawer - Brown - Spacious Chest of Drawers.jpg",
                    price: 899,
                    status: "Popular",
                    category: "Drawer",
                    tag: "Modern",
                    color: "Brown"
                },
                {
                    createdBy: '',
                    description: "",
                    productTitle: "Sleek Platform Bed",
                    image: "/products/Bed - Brown - Sleek Platform Bed (1).jpg",
                    price: 1299,
                    status: "New",
                    category: "Bed",
                    tag: "Minimalistic",
                    color: "Brown"
                },
                {
                    createdBy: '',
                    description: "",
                    productTitle: "Floating Wall Shelf",
                    image: "/products/Bookshelf - Brown - Floating Wall Shelf (1).jpg",
                    price: 89,
                    status: "Popular",
                    category: "Bookshelf",
                    tag: "Stylish",
                    color: "Brown"
                },
                {
                    createdBy: '',
                    description: "",
                    productTitle: "Velvet Upholstered Sofa",
                    image: "/products/Sofa - Brown - Velvet Upholstered Sofa (1).jpg",
                    price: 1399,
                    status: "New",
                    category: "Sofa",
                    tag: "Luxurious",
                    color: "Brown"
                },
                {
                    createdBy: '',
                    description: "",
                    productTitle: "Mid-century Armchair",
                    image: "/products/Chair - Brown - Mid-century Armchair (1).jpg",
                    price: 799,
                    status: "Popular",
                    category: "Chair",
                    tag: "Modern",
                    color: "Brown"
                },
                {
                    createdBy: '',
                    description: "",
                    productTitle: "Round Glass Dining Table",
                    image: "/products/Table - Black - Round Glass Dining Table (1).jpg",
                    price: 599,
                    status: "New",
                    category: "Table",
                    tag: "Elegant",
                    color: "Black"
                },
                {
                    createdBy: '',
                    description: "",
                    productTitle: "Industrial Desk Lamp",
                    image: "/products/Lamp - Black - Industrial Desk Lamp (1).jpg",
                    price: 399,
                    status: "Popular",
                    category: "Lamp",
                    tag: "Modern",
                    color: "Black"
                },
                {
                    createdBy: '',
                    description: "",
                    productTitle: "Minimalist Bedside Table",
                    image: "/products/Table - Brown - Minimalist Bedside Table (1).jpg",
                    price: 129,
                    status: "New",
                    category: "Drawer",
                    tag: "Minimalistic",
                    color: "Brown"
                },
                {
                    createdBy: '',
                    description: "",
                    productTitle: "Four Poster Canopy Bed",
                    image: "/products/Bed - Brown - Four Poster Canopy Bed (1).jpg",
                    price: 999,
                    status: "Popular",
                    category: "Bed",
                    tag: "Luxurious",
                    color: "Brown"
                },
                {
                    createdBy: '',
                    description: "",
                    productTitle: "Contemporary Bookcase",
                    image: "/products/Bookshelf - Brown - Contemporary Bookcase (2).jpg",
                    price: 899,
                    status: "New",
                    category: "Bookshelf",
                    tag: "Stylish",
                    color: "Brown"
                },
                {
                    createdBy: '',
                    description: "",
                    productTitle: "Queen Canopy Bed - Additional View with Gold Trim",
                    image: "/products/Bed - Brown - Queen Size Canopy Bed (2).jpg",
                    price: 149,
                    category: "Bed",
                    tag: "Luxurious",
                    color: "Brown",
                    "status": "Regular"
                },
                {
                    createdBy: '',
                    description: "",
                    productTitle: "Four Poster Canopy Bed - Side View in Oak Finish",
                    image: "/products/Bed - Brown - Four Poster Canopy Bed (2).jpg",
                    price: 699,
                    category: "Bed",
                    tag: "Elegant",
                    color: "Brown",
                    "status": "Regular"
                },
                {
                    createdBy: '',
                    description: "",
                    productTitle: "Sleek Platform Bed - Alternate View with Storage",
                    image: "/products/Bed - Brown - Sleek Platform Bed (1).jpg",
                    price: 799,
                    category: "Bed",
                    tag: "Modern",
                    color: "Brown",
                    "status": "Regular"
                },
                {
                    createdBy: '',
                    description: "",
                    productTitle: "Contemporary Bookcase - Second Option in Walnut",
                    image: "/products/Bookshelf - Brown - Contemporary Bookcase (2).jpg",
                    price: 1899,
                    category: "Bookshelf",
                    tag: "Minimalistic",
                    color: "Brown",
                    "status": "Regular"
                },
                {
                    createdBy: '',
                    description: "",
                    productTitle: "Floating Wall Bookshelf - Variant with Adjustable Shelves",
                    image: "/products/Bookshelf - Brown - Floating Wall Bookshelf (2).jpg",
                    price: 349,
                    category: "Bookshelf",
                    tag: "Stylish",
                    color: "Brown",
                    "status": "Regular"
                },
                {
                    createdBy: '',
                    description: "",
                    productTitle: "Floating Wall Shelf - Second Version with Matte Finish",
                    image: "/products/Bookshelf - Brown - Floating Wall Shelf (2).jpg",
                    price: 79,
                    category: "Bookshelf",
                    tag: "Minimalistic",
                    color: "Brown",
                    "status": "Regular"
                },
                {
                    createdBy: '',
                    description: "",
                    productTitle: "Classic Rocking Chair - Additional Angle with Cushioned Seat",
                    image: "/products/Chair - Brown - Classic Rocking Chair (2).jpg",
                    price: 499,
                    category: "Chair",
                    tag: "Minimalistic",
                    color: "Brown",
                    "status": "Regular"
                },
                {
                    createdBy: '',
                    description: "",
                    productTitle: "Mid-century Armchair - Alternate Design with Leather Upholstery",
                    image: "/products/Chair - Brown - Mid-century Armchair (2).jpg",
                    price: 299,
                    category: "Chair",
                    tag: "Modern",
                    color: "Brown",
                    "status": "Regular"
                },
                {
                    createdBy: '',
                    description: "",
                    productTitle: "Compact Nightstand - Side View with Drawer Organizer",
                    image: "/products/Drawer - White - Compact Nightstand (2).jpg",
                    price: 129,
                    category: "Drawer",
                    tag: "Stylish",
                    color: "White",
                    "status": "Regular"
                },
                {
                    createdBy: '',
                    description: "",
                    productTitle: "Contemporary Floor Lamp - Second Variation with Adjustable Height",
                    image: "/products/Lamp - Brown - Contemporary Floor Lamp (2).jpg",
                    price: 999,
                    category: "Lamp",
                    tag: "Elegant",
                    color: "Brown",
                    "status": "Regular"
                },
                {
                    createdBy: '',
                    description: "",
                    productTitle: "Vintage Desk Lamp - Alternate Design with Brass Finish",
                    image: "/products/Lamp - Black - Vintage Desk Lamp (2).jpg",
                    price: 79,
                    category: "Lamp",
                    tag: "Modern",
                    color: "Black",
                    "status": "Regular"
                },
                {
                    createdBy: '',
                    description: "",
                    productTitle: "Velvet Upholstered Sofa - Additional View with Throw Pillows",
                    image: "/products/Sofa - Brown - Velvet Upholstered Sofa (1).jpg",
                    price: 1499,
                    category: "Sofa",
                    tag: "Luxurious",
                    color: "Brown",
                    "status": "Regular"
                },
                {
                    createdBy: '',
                    description: "",
                    productTitle: "Minimalist Bedside Table - Second Option with Built-in USB Charger",
                    image: "/products/Table - White - Minimalist Bedside Table (2).jpg",
                    price: 299,
                    category: "Table",
                    tag: "Modern",
                    color: "White",
                    "status": "Regular"
                },
                {
                    createdBy: '',
                    description: "",
                    productTitle: "Round Glass Dining Table - Alternate View with Chrome Legs",
                    image: "/products/Table - Black - Round Glass Dining Table (1).jpg",
                    price: 799,
                    category: "Table",
                    tag: "Elegant",
                    color: "Black",
                    "status": "Regular"
                },
                {
                    createdBy: '',
                    description: "",
                    productTitle: "Rustic Wooden Dining Table - Additional View with Matching Bench",
                    image: "/products/Table - Brown - Rustic Wooden Dining Table (2).jpg",
                    price: 399,
                    category: "Table",
                    tag: "Ambient",
                    color: "Brown",
                    "status": "Regular"
                }
            ]
        })

        console.log(seedDB);

        return NextResponse.json({ res: seedDB })
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.stack)
            return NextResponse.json({ message: "Error" })
        }
    }
}

async function PATCH() {
    try {
        const updatedProducts = await db.product.updateMany({
            where: {
                // * Initially the createdBy field set to ""
                createdBy: ''
            },
            data: {
                //* Hard Coded Admin ID
                createdBy: 'admin-id-here'
            }
        })

        return NextResponse.json(updatedProducts)
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.stack)
            return NextResponse.json({ message: "Error" })
        }
    }
}
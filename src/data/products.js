// ข้อมูลสินค้าทั้งหมดอยู่ที่นี่ — เพิ่ม/ลบสินค้าแค่แก้ array
// ภาพเป็นไฟล์ตัวอย่างใน public/images/ เปลี่ยนเป็นรูปจริงได้โดยวางไฟล์ชื่อเดิมทับ
// หรือแก้ค่า image ให้ชี้ไปไฟล์ใหม่
export const categories = [
  {
    slug: "round-v",
    title: "เสื้อคอกลม-คอวี",
    price: 200,
    description: "เสื้อกีฬา เสื้อทีม เสื้อกีฬาสี ใส่สบาย ระบายอากาศดี",
    products: [
      { id: "round-1", name: "เสื้อคอกลม สีเขียว", image: "/images/round-1.svg", sold: true },
      { id: "round-2", name: "เสื้อคอกลม สีน้ำเงิน", image: "/images/round-2.svg", sold: true },
      { id: "v-1", name: "เสื้อคอวี สีแดง", image: "/images/v-1.svg", sold: false },
      { id: "v-2", name: "เสื้อคอวี สีเหลือง", image: "/images/v-2.svg", sold: false },
    ],
  },
  {
    slug: "chinese",
    title: "เสื้อคอจีน",
    price: 250,
    description: "เสื้อคอจีนสำหรับทีมงาน พนักงาน และชุดรุ่น",
    products: [
      { id: "chinese-1", name: "เสื้อคอจีน สีม่วงน้ำเงิน", image: "/images/chinese-1.svg", sold: true },
      { id: "chinese-2", name: "เสื้อคอจีน สีเทาเข้ม", image: "/images/chinese-2.svg", sold: false },
    ],
  },
  {
    slug: "polo",
    title: "เสื้อคอปก",
    price: 290,
    description: "เสื้อโปโลสำหรับพนักงาน OFFICE และเสื้อรุ่น",
    products: [
      { id: "polo-1", name: "เสื้อคอปก สีส้ม", image: "/images/polo-1.svg", sold: true },
      { id: "polo-2", name: "เสื้อคอปก สีฟ้า", image: "/images/polo-2.svg", sold: false },
    ],
  },
  {
    slug: "muslimah",
    title: "เสื้อมุสลีมะห์",
    price: 250,
    description: "เสื้อคอวีตัวยาว สำหรับมุสลีมะห์",
    products: [
      { id: "muslimah-1", name: "เสื้อมุสลีมะห์ สีชมพู", image: "/images/muslimah-1.svg", sold: false },
      { id: "muslimah-2", name: "เสื้อมุสลีมะห์ สีม่วง", image: "/images/muslimah-2.svg", sold: true },
    ],
  },
];

export const fabrics = [
  { id: "micro", name: "ผ้าไมโครเรียบ", note: "เบา แห้งไว เหมาะกับเสื้อกีฬาทั่วไป", image: "/images/round-1.svg" },
  { id: "corn", name: "ผ้าเม็ดข้าวโพด", note: "พื้นผิวเป็นเม็ด ระบายอากาศดี", image: "/images/v-2.svg" },
  { id: "star", name: "ผ้าดาวกระจาย", note: "ลายดาวเล็ก ๆ ให้ลุคสปอร์ต", image: "/images/round-2.svg" },
  { id: "lightning", name: "ผ้าสายฟ้า", note: "เนื้อผ้าเรียบ นิยมทำชุดรุ่น", image: "/images/polo-2.svg" },
];

export const formatPrice = (n) => `฿${n.toLocaleString("th-TH")}`;

export const getCategory = (slug) => categories.find((c) => c.slug === slug);

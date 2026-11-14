# IDEA SPORT PATTANI

เว็บหน้าร้านโรงงานตัดเย็บชุดกีฬา สร้างด้วย React 18 + Vite + react-router-dom

## รัน

```bash
npm install
npm run dev      # เปิดดูตอนพัฒนา
npm run build    # สร้างไฟล์สำหรับขึ้นเว็บ
```

## แก้เนื้อหาตรงไหน

| อยากแก้ | ไฟล์ |
| --- | --- |
| เบอร์โทร / LINE / Facebook / ที่อยู่ (ค่าที่ขึ้นต้น `TODO` คือค่าสมมติ) | `src/data/shop.js` |
| เพิ่ม-ลบสินค้า ราคา หมวด เนื้อผ้า | `src/data/products.js` |
| เปลี่ยนรูปสินค้า | วางไฟล์ทับใน `public/images/` หรือแก้ `image` ใน `products.js` |

หน้าสินค้าทุกหมวดใช้ component เดียวกัน (`src/Components/ProductSection.jsx`)
และเข้าดูเฉพาะหมวดได้ที่ `/Product/round-v`, `/Product/chinese`, `/Product/polo`, `/Product/muslimah`

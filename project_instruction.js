const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        AlignmentType, BorderStyle, WidthType, ShadingType, HeadingLevel,
        LevelFormat, PageBreak, PageOrientation } = require('docx');
const fs = require('fs');

// Color scheme
const colors = {
  header: "2E5090",
  subheader: "4472C4",
  lightBg: "D9E1F2",
  lightBg2: "E7E6E6",
  border: "CCCCCC"
};

const border = { style: BorderStyle.SINGLE, size: 1, color: colors.border };
const borders = { top: border, bottom: border, left: border, right: border };

// Helper để tạo cell
function createCell(text, width = 2340, isBold = false, bgColor = null) {
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: bgColor ? { fill: bgColor, type: ShadingType.CLEAR } : undefined,
    margins: { top: 80, bottom: 80, left: 120, right: 120 },
    children: [new Paragraph({
      children: [new TextRun({
        text: text,
        bold: isBold,
        size: isBold ? 22 : 20
      })]
    })]
  });
}

const doc = new Document({
  styles: {
    default: {
      document: { run: { font: "Arial", size: 22 } }
    },
    paragraphStyles: [
      {
        id: "Heading1",
        name: "Heading 1",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: colors.header },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 0 }
      },
      {
        id: "Heading2",
        name: "Heading 2",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 26, bold: true, font: "Arial", color: colors.subheader },
        paragraph: { spacing: { before: 180, after: 100 }, outlineLevel: 1 }
      },
      {
        id: "Heading3",
        name: "Heading 3",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 24, bold: true, font: "Arial", color: colors.subheader },
        paragraph: { spacing: { before: 120, after: 80 }, outlineLevel: 2 }
      }
    ]
  },
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [
          { level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } } }
        ]
      }
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    children: [
      // === TITLE ===
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 240 },
        children: [new TextRun({
          text: "HƯ­ỚNG DẪN CHI TIẾT: PHÂN CHIA CÔNG VIỆC & CẤU TRÚC BÁO CÁO",
          bold: true,
          size: 32,
          color: colors.header
        })]
      }),

      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 360 },
        children: [new TextRun({
          text: "Dự án E-Commerce Thời trang / Nội thất Thông minh | Nhóm 5 người",
          size: 22,
          italic: true
        })]
      }),

      // === GIỚI THIỆU ===
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("PHẦN I: PHÂN TÍCH YÊU CẦU & PHÂN CHIA VAI TRÒ")]
      }),

      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({
          text: "1.1. Những yêu cầu CHÍNH của dự án",
          bold: true,
          size: 24
        })]
      }),

      new Paragraph({
        spacing: { after: 80 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Lĩnh vực: E-Commerce chuyên biệt (Thời trang High-end hoặc Nội thất thông minh)")]
      }),

      new Paragraph({
        spacing: { after: 80 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Tính năng ĐỘT PHÁ: Tìm kiếm bằng ảnh (Visual Search), Quản lý địa chỉ 1-N, Giỏ hàng cải tiến")]
      }),

      new Paragraph({
        spacing: { after: 80 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Sơ đồ: BPMN (quy trình), Use Case, ERD/Class diagram")]
      }),

      new Paragraph({
        spacing: { after: 80 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("UI/UX: Figma prototype với micro-interactions")]
      }),

      new Paragraph({
        spacing: { after: 240 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Implementation: Source code minh họa (Frontend + Backend) chứng minh khả năng")]
      }),

      // === PHÂN CHIA VAI TRÒ ===
      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({
          text: "1.2. Phân chia 5 vai trò & trách nhiệm trong nhóm",
          bold: true,
          size: 24
        })]
      }),

      new Table({
        width: { size: 9026, type: WidthType.DXA },
        columnWidths: [1500, 2000, 2800, 2726],
        rows: [
          new TableRow({
            children: [
              createCell("Vai trò", 1500, true, colors.lightBg),
              createCell("Tên / Thành viên", 2000, true, colors.lightBg),
              createCell("Trách nhiệm Chính", 2800, true, colors.lightBg),
              createCell("Kỹ năng Yêu cầu", 2726, true, colors.lightBg)
            ]
          }),
          new TableRow({
            children: [
              createCell("1️⃣ BA / PM\n(Product Manager)", 1500),
              createCell("[Tên thành viên 1]", 2000),
              createCell("• Định hình vấn đề (pain point)\n• Phân tích tính năng 3 vai trò\n• Lên kế hoạch giai đoạn\n• Viết phần 'Phân tích' trong báo cáo", 2800),
              createCell("• Phân tích nghiệp vụ\n• Giao tiếp nhóm\n• Tư duy sản phẩm\n• Kỹ năng viết lách", 2726)
            ]
          }),
          new TableRow({
            children: [
              createCell("2️⃣ Backend/System\nArchitect", 1500),
              createCell("[Tên thành viên 2]", 2000),
              createCell("• Thiết kế ERD/Database\n• Xác định API endpoints\n• Xử lý logic phức tạp (Image search)\n• Code backend demo", 2800),
              createCell("• Database design\n• API REST/GraphQL\n• Node.js / Python\n• SQL", 2726)
            ]
          }),
          new TableRow({
            children: [
              createCell("3️⃣ Frontend Dev", 1500),
              createCell("[Tên thành viên 3]", 2000),
              createCell("• Code UI từ Figma\n• Tích hợp API\n• Xử lý state & logic UI\n• Testing UX flow", 2800),
              createCell("• React / Next.js\n• HTML/CSS/JS\n• UI Component\n• API integration", 2726)
            ]
          }),
          new TableRow({
            children: [
              createCell("4️⃣ Designer /\nFigma", 1500),
              createCell("[Tên thành viên 4]", 2000),
              createCell("• Wireframe & Hi-fi design\n• Prototype (micro-interactions)\n• Design System consistency\n• User testing feedback", 2800),
              createCell("• Figma (advanced)\n• UX/UI principles\n• Prototyping\n• Design thinking", 2726)
            ]
          }),
          new TableRow({
            children: [
              createCell("5️⃣ QA / Tester &\nCộng tác", 1500),
              createCell("[Tên thành viên 5]", 2000),
              createCell("• Kiểm thử toàn bộ flow\n• Test use case & edge cases\n• Vẽ BPMN & Use Case\n• Hỗ trợ viết báo cáo", 2800),
              createCell("• Testing mindset\n• Draw.io (BPMN/UML)\n• Use case analysis\n• Chỉ ra lỗi & đề xuất", 2726)
            ]
          })
        ]
      }),

      new Paragraph({ spacing: { after: 240 }, children: [new TextRun("")] }),

      // === GIAI ĐOẠN 1 ===
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("PHẦN II: 5 GIAI ĐOẠN THỰC HIỆN & CÔNG VIỆC CỤ THỂ")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("GIAI ĐOẠN 1: Phân tích & Chọn Lĩnh vực (Tuần 1-2)")]
      }),

      new Table({
        width: { size: 9026, type: WidthType.DXA },
        columnWidths: [1800, 3600, 3626],
        rows: [
          new TableRow({
            children: [
              createCell("Vai trò", 1800, true, colors.lightBg),
              createCell("Công việc Cụ thể", 3600, true, colors.lightBg),
              createCell("Output / Deliverable", 3626, true, colors.lightBg)
            ]
          }),
          new TableRow({
            children: [
              createCell("🎯 BA/PM", 1800),
              createCell("• Khảo sát bài toán thực tế\n• Xác định pain point người dùng\n• Đưa ra 3 lĩnh vực gợi ý\n• Chọn lĩnh vực phù hợp\n• Định hình scope dự án", 3600),
              createCell("📄 Document: \n'Phân tích lĩnh vực'\n• Pain point user\n• Tiêu chí lựa chọn\n• Scope & constraints", 3626)
            ]
          }),
          new TableRow({
            children: [
              createCell("🏗️ Backend", 1800),
              createCell("• Tham gia brainstorm\n• Đánh giá tính khả thi về kỹ thuật\n• Gợi ý công nghệ (AI, API)", 3600),
              createCell("💬 Input:\nKhả năng kỹ thuật\n(technical feasibility)", 3626)
            ]
          }),
          new TableRow({
            children: [
              createCell("🎨 Designer", 1800),
              createCell("• Tham gia brainstorm\n• Gợi ý tính năng từ góc nhìn UX\n• Tìm reference (competitor)", 3600),
              createCell("🔗 References:\nUI/UX patterns từ\ncompetitor tương tự", 3626)
            ]
          }),
          new TableRow({
            children: [
              createCell("⚙️ Frontend", 1800),
              createCell("• Tham gia brainstorm\n• Gợi ý technical stack", 3600),
              createCell("💬 Input:\nStack recommendation", 3626)
            ]
          }),
          new TableRow({
            children: [
              createCell("🧪 QA", 1800),
              createCell("• Tham gia brainstorm\n• Gợi ý test scenarios sơ bộ", 3600),
              createCell("📝 Danh sách\ntest scenarios ban đầu", 3626)
            ]
          })
        ]
      }),

      new Paragraph({ spacing: { after: 240 }, children: [new TextRun("")] }),

      // === GIAI ĐOẠN 2 ===
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("GIAI ĐOẠN 2: Phân tích Tính năng - 3 Vai trò (Tuần 3-4)")]
      }),

      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({
          text: "Tạo bảng phân tích theo 3 góc nhìn: Người mua (User) | Doanh nghiệp (Admin) | Hệ thống (Technical)",
          italic: true,
          size: 20
        })]
      }),

      new Table({
        width: { size: 9026, type: WidthType.DXA },
        columnWidths: [1800, 3600, 3626],
        rows: [
          new TableRow({
            children: [
              createCell("Vai trò", 1800, true, colors.lightBg),
              createCell("Công việc Cụ thể", 3600, true, colors.lightBg),
              createCell("Output / Deliverable", 3626, true, colors.lightBg)
            ]
          }),
          new TableRow({
            children: [
              createCell("🎯 BA/PM", 1800),
              createCell("• Dẫn dắt quá trình phân tích\n• Tạo bảng 'Feature Matrix' (3 vai trò)\n• Ưu tiên tính năng theo impact\n• Xác định 'breakthrough features'", 3600),
              createCell("📊 Document:\n'Feature Analysis Matrix'\n- User needs\n- Business KPI\n- Technical constraints\n- Breakthrough features", 3626)
            ]
          }),
          new TableRow({
            children: [
              createCell("👤 Góc USER", 1800),
              createCell("Cụ thể từ BA/PM + Designer:\n• Visual Search (Tìm ảnh)\n• Quick Edit giỏ hàng\n• Reorder recommendation\n• Smart address suggestion", 3600),
              createCell("✅ Features list:\n(Ranked by frequency)", 3626)
            ]
          }),
          new TableRow({
            children: [
              createCell("💼 Góc BUSINESS", 1800),
              createCell("Cụ thể từ BA/PM:\n• Smart promo dashboard\n• Inventory analytics\n• Customer behavior tracking\n• Revenue optimization", 3600),
              createCell("📈 KPI & metrics\nto track", 3626)
            ]
          }),
          new TableRow({
            children: [
              createCell("⚙️ Góc TECHNICAL", 1800),
              createCell("Cụ thể từ Backend + Frontend:\n• 1-N Address relationship\n• Product_Variant table\n• Image recognition API\n• Caching strategy", 3600),
              createCell("🏗️ Technical\ncomponents list", 3626)
            ]
          }),
          new TableRow({
            children: [
              createCell("🧪 QA", 1800),
              createCell("• Lập danh sách test case từ features\n• Xác định edge cases", 3600),
              createCell("📋 Comprehensive\ntest scenarios", 3626)
            ]
          })
        ]
      }),

      new Paragraph({ spacing: { after: 240 }, children: [new TextRun("")] }),

      // === GIAI ĐOẠN 3 ===
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("GIAI ĐOẠN 3: Thiết kế & Diagrams (Tuần 5-7)")]
      }),

      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({
          text: "Tạo artifacts: BPMN, Use Case, ERD/Class. Chuẩn bị Figma. Đây là phần 'xương sống' của báo cáo.",
          italic: true,
          size: 20
        })]
      }),

      new Table({
        width: { size: 9026, type: WidthType.DXA },
        columnWidths: [1800, 3600, 3626],
        rows: [
          new TableRow({
            children: [
              createCell("Vai trò", 1800, true, colors.lightBg),
              createCell("Công việc Cụ thể", 3600, true, colors.lightBg),
              createCell("Output / Deliverable", 3626, true, colors.lightBg)
            ]
          }),
          new TableRow({
            children: [
              createCell("🎯 BA/PM", 1800),
              createCell("• Review & validate tất cả diagrams\n• Ensure business logic đúng\n• Coordinate giữa Designer & Backend", 3600),
              createCell("✅ Approval stamp\ntrên tất cả diagrams", 3626)
            ]
          }),
          new TableRow({
            children: [
              createCell("🏗️ Backend\n+\n🧪 QA", 1800),
              createCell("⚠️ CHÍNH: Thiết kế diagrams\n\n• BPMN: Luồng đơn hàng từ 'quẹt ảnh' → 'nhận hàng'\n  - Swimlane: Customer, System, Warehouse\n  - Include: Search→Add→Checkout→Delivery\n\n• Use Case: Các interactions\n  - UC01: Visual Search\n  - UC02: Update Cart (MODIFY not just delete)\n  - UC03: Manage Address\n  - UC04: Apply Promo\n\n• ERD / Class Diagram:\n  - User ←→ Address (1-N) ⭐\n  - Product ←→ ProductVariant (1-N)\n  - Order ← OrderItem\n  - Include all attributes", 3600),
              createCell("📐 Diagrams in Draw.io:\n\n1️⃣ BPMN.drawio\n   (~10-15 nodes)\n\n2️⃣ UseCase.drawio\n   (~5-8 use cases)\n\n3️⃣ ERD.drawio\n   or ClassDiagram.drawio\n   (~8-10 entities)\n\n⚠️ Lưu ý:\n- Clear, chuyên nghiệp\n- Ghi chú chi tiết\n- Validate logic", 3626)
            ]
          }),
          new TableRow({
            children: [
              createCell("🎨 Designer", 1800),
              createCell("⚠️ CHÍNH: Wireframe & Hi-Fi\n\n• Wireframe (Low-fi)\n  - Homepage với search icon\n  - Search results (grid + filters)\n  - Product detail + size selector\n  - Improved cart (Quick Edit button)\n  - Checkout flow\n  - Address selector (dropdown từ 1-N)\n\n• High-fidelity Design\n  - Color scheme, typography\n  - Component library\n  - Responsive (mobile-first)\n  - Micro-interactions spec\n  - Loading states", 3600),
              createCell("🎨 Figma File:\n\n• Page 1: Wireframes\n• Page 2: Hi-Fi Design\n• Page 3: Components\n• Page 4: Prototype\n  (interactive flow)\n\n✅ Chuẩn bị được:\n- Asset exports\n- Color tokens\n- Typography scale", 3626)
            ]
          }),
          new TableRow({
            children: [
              createCell("⚙️ Frontend", 1800),
              createCell("• Review Figma\n• Plan component structure\n• Identify reusable components", 3600),
              createCell("📝 Component list\n(e.g., SearchBar,\nProductCard, etc.)", 3626)
            ]
          })
        ]
      }),

      new Paragraph({ spacing: { after: 120 }, children: [new TextRun("")] }),

      new Paragraph({
        spacing: { before: 120, after: 80 },
        children: [new TextRun({
          text: "⚠️ LƯU Ý KỸ THUẬT KHI VẼ DIAGRAM:",
          bold: true,
          size: 22,
          color: "C00000"
        })]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("BPMN: Vẽ quy trình 'happy path' + xử lý exception (lỗi, hủy đơn)")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Use Case: Dùng << include >> và << extend >> để chỉ dependency (VD: 'Update Cart' bao gồm 'Validate Inventory')")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("ERD: Chỉ rõ cardinality, primary key, foreign key. CHỐNG QUÊN: User-Address là 1-N, Product-Variant là 1-N")]
      }),

      new Paragraph({
        spacing: { after: 240 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Figma: Chuẩn bị Prototype với interactive frames (search → results → detail) để demo live")]
      }),

      // === GIAI ĐOẠN 4 ===
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("GIAI ĐOẠN 4: Implementation & Integration (Tuần 8-10)")]
      }),

      new Table({
        width: { size: 9026, type: WidthType.DXA },
        columnWidths: [1800, 3600, 3626],
        rows: [
          new TableRow({
            children: [
              createCell("Vai trò", 1800, true, colors.lightBg),
              createCell("Công việc Cụ thể", 3600, true, colors.lightBg),
              createCell("Output / Deliverable", 3626, true, colors.lightBg)
            ]
          }),
          new TableRow({
            children: [
              createCell("🏗️ Backend", 1800),
              createCell("• Setup database (PostgreSQL/MySQL)\n• Tạo API endpoints (RESTful)\n  - POST /api/search/image\n  - GET /api/products\n  - POST /api/orders\n  - GET /api/user/addresses\n• Implement image recognition\n• Handle caching (Redis)\n• Error handling", 3600),
              createCell("💾 GitHub repo:\n/backend\n- db/schema.sql\n- routes/*.js\n- controllers/*.js\n- .env.example\n- README.md\n\n✅ API documentation\n(Swagger/Postman)", 3626)
            ]
          }),
          new TableRow({
            children: [
              createCell("⚙️ Frontend", 1800),
              createCell("• Setup React/Next.js project\n• Convert Figma → Components\n  - SearchBar (với icon camera)\n  - ProductCard, ProductDetail\n  - ImprovedCart (Quick Edit)\n  - AddressSelector\n• Integrate Backend APIs\n• State management (Redux/Context)\n• Handle loading/error states\n• Testing flows", 3600),
              createCell("💾 GitHub repo:\n/frontend\n- src/components/*\n- src/pages/*\n- src/hooks/*\n- src/api/client.js\n- .env.example\n- README.md\n\n✅ Live demo on\nLocalhost:3000", 3626)
            ]
          }),
          new TableRow({
            children: [
              createCell("🎨 Designer", 1800),
              createCell("• Hand off design to FE\n• Provide visual spec\n• QA design implementation\n• Iterate if needed\n• Create design documentation", 3600),
              createCell("📖 Design Handbook:\n- Color palette\n- Typography rules\n- Component specs\n- Spacing guide\n- Interaction guidelines", 3626)
            ]
          }),
          new TableRow({
            children: [
              createCell("🧪 QA", 1800),
              createCell("• Test tất cả flows\n• Bug reporting\n• Compatibility testing\n• Performance check\n• Collect screenshots", 3600),
              createCell("📋 Test Report:\n- Test cases passed/failed\n- Screenshots\n- Bug list\n- Performance metrics", 3626)
            ]
          }),
          new TableRow({
            children: [
              createCell("🎯 BA/PM", 1800),
              createCell("• Review code structure\n• Coordinate integration\n• Risk mitigation\n• Timeline tracking", 3600),
              createCell("📊 Status dashboard\n(Gantt chart)", 3626)
            ]
          })
        ]
      }),

      new Paragraph({ spacing: { after: 120 }, children: [new TextRun("")] }),

      new Paragraph({
        spacing: { before: 120, after: 80 },
        children: [new TextRun({
          text: "⚠️ LƯU Ý KỸ THUẬT KHI CODE:",
          bold: true,
          size: 22,
          color: "C00000"
        })]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Backend: Validate input + XSS/CSRF protection. Handle image processing latency gracefully (queue jobs).")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Frontend: Implement error boundaries. Show loading skeletons. Lazy load images. Responsive design (mobile first).")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Database: Index frequently queried fields (user_id, product_id). Use transactions for order creation.")]
      }),

      new Paragraph({
        spacing: { after: 240 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Git: Use meaningful commit messages. Create branches per feature. PR review before merge.")]
      }),

      // === GIAI ĐOẠN 5 ===
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("GIAI ĐOẠN 5: Báo cáo & Bảo vệ (Tuần 11-12)")]
      }),

      new Table({
        width: { size: 9026, type: WidthType.DXA },
        columnWidths: [1800, 3600, 3626],
        rows: [
          new TableRow({
            children: [
              createCell("Vai trò", 1800, true, colors.lightBg),
              createCell("Công việc Cụ thể", 3600, true, colors.lightBg),
              createCell("Output / Deliverable", 3626, true, colors.lightBg)
            ]
          }),
          new TableRow({
            children: [
              createCell("🎯 BA/PM", 1800),
              createCell("🔴 CHÍNH: Viết báo cáo\n\n• Phần 1: Giới thiệu (5%)\n  - Bối cảnh, mục tiêu\n\n• Phần 2: Phân tích (15%)\n  - Pain point\n  - Feature matrix 3 vai trò\n  - Lý do chọn lĩnh vực\n\n• Phần 3: Thiết kế (25%)\n  - BPMN diagram\n  - Use Case diagram\n  - ERD\n  - Figma mockup\n  - Giải thích từng thiết kế\n\n• Phần 4: Implementation (30%)\n  - Architecture overview\n  - Key technical decisions\n  - Code snippets (Backend + FE)\n  - API documentation\n  - Figma → Implementation mapping\n\n• Phần 5: Kết luận (10%)\n  - Đạt được những gì\n  - Limitations & future work", 3600),
              createCell("📄 Final Report:\n\n• Format: PDF\n  (A4, double-spaced,\n  12pt Arial)\n\n• Bao gồm:\n  - Cover page\n  - Table of contents\n  - Executive summary\n  - Body (5 sections)\n  - References\n  - Appendix:\n    * Screenshots\n    * Code listings\n    * Test results\n\n📌 Độ dài: 20-30 trang", 3626)
            ]
          }),
          new TableRow({
            children: [
              createCell("🏗️ Backend", 1800),
              createCell("• Viết phần 'Technical Architecture'\n• Giải thích database design\n• Documentate APIs\n• Provide code samples", 3600),
              createCell("📝 Technical doc:\n- Architecture diagram\n- API specs (Swagger)\n- Code comments", 3626)
            ]
          }),
          new TableRow({
            children: [
              createCell("⚙️ Frontend", 1800),
              createCell("• Viết phần 'Frontend Implementation'\n• Giải thích component structure\n• Screenshot UI\n• Performance metrics", 3600),
              createCell("📸 Screenshots:\n- Each major screen\n- Responsive variants", 3626)
            ]
          }),
          new TableRow({
            children: [
              createCell("🎨 Designer", 1800),
              createCell("• Viết phần 'UI/UX Design Process'\n• Giải thích design choices\n• Include Figma prototypes\n• User feedback (if any)", 3600),
              createCell("🎨 Design section:\n- Wireframes\n- Hi-fi mockups\n- Prototype video\n- Design rationale", 3626)
            ]
          }),
          new TableRow({
            children: [
              createCell("🧪 QA", 1800),
              createCell("• Viết phần 'Testing & QA'\n• Report test coverage\n• List bugs found & fixed\n• Performance results", 3600),
              createCell("📋 Testing section:\n- Test matrix\n- Bug reports (fixed)\n- Performance stats\n- User testing feedback", 3626)
            ]
          })
        ]
      }),

      new Paragraph({ spacing: { after: 240 }, children: [new TextRun("")] }),

      // === CẤU TRÚC BÁO CÁO ===
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("PHẦN III: CẤU TRÚC CỤ THỂ CỦA BÁO CÁO CUỐI")]
      }),

      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({
          text: "Template báo cáo tiêu chuẩn (20-30 trang, PDF)",
          bold: true,
          size: 24
        })]
      }),

      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun({
          text: "📑 COVER PAGE",
          bold: true,
          size: 22,
          color: colors.subheader
        })]
      }),

      new Paragraph({
        spacing: { after: 120 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Tên dự án | Tên nhóm | Ngày nộp | Giảng viên hướng dẫn")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun({
          text: "📑 TABLE OF CONTENTS",
          bold: true,
          size: 22,
          color: colors.subheader
        })]
      }),

      new Paragraph({
        spacing: { after: 120 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Auto-generated từ headings")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun({
          text: "📑 EXECUTIVE SUMMARY (1 trang)",
          bold: true,
          size: 22,
          color: colors.subheader
        })]
      }),

      new Paragraph({
        spacing: { after: 120 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Tóm tắt: Vấn đề + Giải pháp + Kết quả")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun({
          text: "📑 I. INTRODUCTION (2-3 trang)",
          bold: true,
          size: 22,
          color: colors.subheader
        })]
      }),

      new Paragraph({
        spacing: { after: 80 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Background: Xu hướng E-Commerce hiện nay")]
      }),

      new Paragraph({
        spacing: { after: 80 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Objective: Mục tiêu dự án")]
      }),

      new Paragraph({
        spacing: { after: 120 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Scope: Phạm vi công việc")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun({
          text: "📑 II. ANALYSIS (5-6 trang) 🎯 BA chủ trì",
          bold: true,
          size: 22,
          color: colors.subheader
        })]
      }),

      new Paragraph({
        spacing: { after: 80 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("2.1 Pain Point Analysis: Các vấn đề của user, business, system")]
      }),

      new Paragraph({
        spacing: { after: 80 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("2.2 Domain Selection: Tại sao chọn Thời trang / Nội thất?")]
      }),

      new Paragraph({
        spacing: { after: 80 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("2.3 Feature Matrix (Table):\n    - Requirement | User Benefit | Business KPI | Technical Challenge")]
      }),

      new Paragraph({
        spacing: { after: 80 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("2.4 Breakthrough Features: Visual Search, Smart Cart, Smart Address")]
      }),

      new Paragraph({
        spacing: { after: 120 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("2.5 Comparison: Competitors (Shopee, Tiki, Amazon) - Những gì chúng ta làm tốt hơn")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun({
          text: "📑 III. DESIGN (8-10 trang) 🏗️ Backend + 🎨 Designer chủ trì",
          bold: true,
          size: 22,
          color: colors.subheader
        })]
      }),

      new Paragraph({
        spacing: { after: 80 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("3.1 System Architecture Overview (Diagram)")]
      }),

      new Paragraph({
        spacing: { after: 80 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("3.2 Business Process (BPMN Diagram)\n    - Giải thích các swimlane, activities, gateways")]
      }),

      new Paragraph({
        spacing: { after: 80 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("3.3 Use Case Diagram\n    - Danh sách all actors & use cases\n    - Giải thích relationships (include, extend)")]
      }),

      new Paragraph({
        spacing: { after: 80 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("3.4 Database Design (ERD)\n    - ⭐ User-Address (1-N)\n    - Product-Variant (1-N)\n    - Order-OrderItem (1-N)\n    - Giải thích normalization choices")]
      }),

      new Paragraph({
        spacing: { after: 80 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("3.5 UI/UX Design (Figma)\n    - Wireframes (Low-fi)\n    - High-fidelity Mockups\n    - Key screens: Search, Results, Detail, Cart, Checkout, Address\n    - Responsive variants")]
      }),

      new Paragraph({
        spacing: { after: 120 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("3.6 Design Rationale: Tại sao design như vậy? UX reasoning")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun({
          text: "📑 IV. IMPLEMENTATION (8-10 trang) ⚙️ FE + 🏗️ BE chủ trì",
          bold: true,
          size: 22,
          color: colors.subheader
        })]
      }),

      new Paragraph({
        spacing: { after: 80 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("4.1 Technology Stack\n    - Frontend: React/Next.js, Tailwind CSS, Redux\n    - Backend: Node.js + Express (hoặc Python + FastAPI)\n    - Database: PostgreSQL\n    - Deployment: Docker, AWS/Heroku")]
      }),

      new Paragraph({
        spacing: { after: 80 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("4.2 Backend Implementation\n    - Database schema (SQL code)\n    - API Endpoints (REST)\n    - Image recognition integration\n    - Error handling & validation")]
      }),

      new Paragraph({
        spacing: { after: 80 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("4.3 Frontend Implementation\n    - Component structure (folder tree)\n    - State management approach\n    - Key components code snippets\n    - Screenshots of UI")]
      }),

      new Paragraph({
        spacing: { after: 80 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("4.4 API Documentation\n    - Swagger/OpenAPI spec (or table)\n    - Example requests & responses")]
      }),

      new Paragraph({
        spacing: { after: 80 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("4.5 Figma → Code Mapping\n    - Giải thích cách convert design thành component\n    - Design tokens (colors, spacing, typography)")]
      }),

      new Paragraph({
        spacing: { after: 120 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("4.6 Key Challenges & Solutions\n    - Image processing latency → Async queue\n    - Address validation → Map API integration\n    - Inventory conflict → Database locking")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun({
          text: "📑 V. TESTING & QUALITY ASSURANCE (2-3 trang) 🧪 QA chủ trì",
          bold: true,
          size: 22,
          color: colors.subheader
        })]
      }),

      new Paragraph({
        spacing: { after: 80 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("5.1 Test Strategy\n    - Unit testing\n    - Integration testing\n    - E2E testing (Cypress/Playwright)")]
      }),

      new Paragraph({
        spacing: { after: 80 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("5.2 Test Results\n    - Test cases passed: X/Y\n    - Code coverage: X%\n    - Performance metrics (response time, load time)")]
      }),

      new Paragraph({
        spacing: { after: 80 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("5.3 Bug Report\n    - List of bugs found (Critical, Major, Minor)\n    - Bugs fixed vs. deferred")]
      }),

      new Paragraph({
        spacing: { after: 120 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("5.4 User Testing Feedback (if applicable)\n    - Feedback từ 3-5 test users\n    - Iterations made based on feedback")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun({
          text: "📑 VI. CONCLUSION (1-2 trang) 🎯 BA chủ trì",
          bold: true,
          size: 22,
          color: colors.subheader
        })]
      }),

      new Paragraph({
        spacing: { after: 80 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("6.1 Achievements: Đã đạt được những gì từ mục tiêu ban đầu")]
      }),

      new Paragraph({
        spacing: { after: 80 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("6.2 Breakthrough Points: Những điểm nổi bật so với competition")]
      }),

      new Paragraph({
        spacing: { after: 80 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("6.3 Limitations: Những hạn chế hiện tại")]
      }),

      new Paragraph({
        spacing: { after: 80 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("6.4 Future Work: Tính năng sắp tới\n    - Phase 2: Real-time recommendation\n    - Phase 3: AR try-on")]
      }),

      new Paragraph({
        spacing: { after: 120 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("6.5 Lessons Learned: Bài học từ dự án")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun({
          text: "📑 REFERENCES",
          bold: true,
          size: 22,
          color: colors.subheader
        })]
      }),

      new Paragraph({
        spacing: { after: 120 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Danh sách papers, documentation, tools được sử dụng")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun({
          text: "📑 APPENDICES",
          bold: true,
          size: 22,
          color: colors.subheader
        })]
      }),

      new Paragraph({
        spacing: { after: 80 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("A. Code Listings (Backend + Frontend key files)")]
      }),

      new Paragraph({
        spacing: { after: 80 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("B. API Documentation (full spec)")]
      }),

      new Paragraph({
        spacing: { after: 80 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("C. Database Schema (SQL)")]
      }),

      new Paragraph({
        spacing: { after: 80 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("D. Screenshots (Full flow walkthrough)")]
      }),

      new Paragraph({
        spacing: { after: 80 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("E. Test Report (Full test matrix)")]
      }),

      new Paragraph({
        spacing: { after: 240 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("F. Figma Links & Design Files")]
      }),

      // === LƯU Ý Kỹ THUẬT ===
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("PHẦN IV: CHECKLIST KỸ THUẬT TỪNG ARTIFACT")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("✅ Khi Vẽ Diagram (Draw.io)")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("BPMN.drawio: Có 3 swimlane (Customer, System, Admin). Các event, activity, gateway rõ ràng. Tối thiểu 10 nodes.")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("UseCase.drawio: Tối thiểu 5 use cases. Có include/extend. Actors rõ ràng. Ghi chú mục đích.")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("ERD.drawio: Tối thiểu 8 entities. Primary keys, foreign keys, cardinality (1-1, 1-N). Attributes đầy đủ (ít nhất 3 per entity).")]
      }),

      new Paragraph({
        spacing: { after: 120 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("🚀 Export: PNG + PDF (high resolution, 300 DPI). File naming: 01_bpmn, 02_usecase, 03_erd.")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("✅ Khi Thiết Kế Figma")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Frame structure: Page → Section (Wireframes, Hi-Fi, Components, Prototype)")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Naming convention: [01] Homepage, [02] Search, [03] Product Detail, [04] Cart, [05] Checkout, etc.")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Screens phải cover: Search → Results → Detail → Cart (with Quick Edit) → Address Select → Checkout → Confirmation")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Responsive: Wireframe desktop + mobile layout")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Prototype: Interactive flow (at least 3 key user journeys)")]
      }),

      new Paragraph({
        spacing: { after: 120 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Annotations: Ghi chú tại mỗi screen về interaction, animation, error states")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("✅ Khi Code Backend")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Folder structure: controllers/ → routes/ → models/ → middlewares/ → utils/")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Database: Migration files (tăng version), seed data cho testing")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("APIs: Ít nhất 10 endpoints (POST login, GET products, POST order, GET user/addresses, PUT address, DELETE cart-item, etc.)")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Validation: Input validation, error messages rõ ràng")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Documentation: .env.example, README.md (setup instructions), API Swagger spec")]
      }),

      new Paragraph({
        spacing: { after: 120 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Testing: Unit test ít nhất 3 API endpoints")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("✅ Khi Code Frontend")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Folder structure: components/ → pages/ → hooks/ → store/ → api/")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Components: Ít nhất 8 reusable components (Button, Card, Input, Modal, Select, SearchBar, ProductCard, Cart)")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Pages: Home, Search, ProductDetail, Cart, Checkout, Profile")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("State management: Redux / Context API (global state cho cart, user, filters)")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("API client: Axios instance với interceptors (auth, error handling)")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Loading states: Skeleton screens, spinners")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Error handling: Try-catch, error boundaries")]
      }),

      new Paragraph({
        spacing: { after: 120 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Responsive: Mobile-first approach, tested on phone + tablet")]
      }),

      // === TIMELINE ===
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("PHẦN V: TIMELINE & MILESTONE")]
      }),

      new Table({
        width: { size: 9026, type: WidthType.DXA },
        columnWidths: [1200, 2000, 3300, 2526],
        rows: [
          new TableRow({
            children: [
              createCell("Tuần", 1200, true, colors.lightBg),
              createCell("Giai đoạn", 2000, true, colors.lightBg),
              createCell("Deliverable", 3300, true, colors.lightBg),
              createCell("Trạng thái", 2526, true, colors.lightBg)
            ]
          }),
          new TableRow({
            children: [
              createCell("1-2", 1200),
              createCell("Phân tích & Lựa chọn", 2000),
              createCell("Feature Matrix, Pain Point Analysis", 3300),
              createCell("✅ Complete", 2526)
            ]
          }),
          new TableRow({
            children: [
              createCell("3-4", 1200),
              createCell("Phân tích Tính năng", 2000),
              createCell("3-role Feature Analysis", 3300),
              createCell("✅ Complete", 2526)
            ]
          }),
          new TableRow({
            children: [
              createCell("5-7", 1200),
              createCell("Design & Diagrams", 2000),
              createCell("BPMN, Use Case, ERD, Figma Hi-Fi", 3300),
              createCell("🔄 In Progress", 2526)
            ]
          }),
          new TableRow({
            children: [
              createCell("8-10", 1200),
              createCell("Implementation", 2000),
              createCell("Backend + FE code, live demo", 3300),
              createCell("⏳ Pending", 2526)
            ]
          }),
          new TableRow({
            children: [
              createCell("11-12", 1200),
              createCell("Testing & Report", 2000),
              createCell("QA Report, Final document", 3300),
              createCell("⏳ Pending", 2526)
            ]
          })
        ]
      }),

      new Paragraph({ spacing: { after: 240 }, children: [new TextRun("")] }),

      // === CHEAT SHEET ===
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("PHẦN VI: CHEAT SHEET NHANH")]
      }),

      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({
          text: "❓ Nếu bạn là...",
          bold: true,
          size: 24,
          color: colors.subheader
        })]
      }),

      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({
          text: "👤 BA / Product Manager:",
          bold: true
        })]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Tuần 1-2: Lập Feature Matrix 3 vai trò")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Tuần 3-4: Phân tích sâu tính năng + competitor")]
      }),

      new Paragraph({
        spacing: { after: 80 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Tuần 11-12: Viết báo cáo hoàn chỉnh")]
      }),

      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({
          text: "🏗️ Backend / System Architect:",
          bold: true
        })]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Tuần 5-7: Vẽ ERD (FOCUS: User-Address 1-N, Product-Variant 1-N)")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Tuần 8-10: Code backend (ít nhất 10 API endpoints)")]
      }),

      new Paragraph({
        spacing: { after: 80 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Tuần 11-12: Viết Technical Architecture section")]
      }),

      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({
          text: "⚙️ Frontend Developer:",
          bold: true
        })]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Tuần 5-7: Chờ Figma, planning component structure")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Tuần 8-10: Code frontend (setup React project, build 8+ components)")]
      }),

      new Paragraph({
        spacing: { after: 80 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Tuần 11-12: Viết Frontend Implementation section")]
      }),

      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({
          text: "🎨 Designer / Figma:",
          bold: true
        })]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Tuần 3-4: Research UI patterns (Shopee, Tiki, Amazon)")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Tuần 5-6: Wireframe (Low-fi)")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Tuần 6-7: Hi-Fi design + Prototype")]
      }),

      new Paragraph({
        spacing: { after: 80 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Tuần 11-12: Viết Design section + hand-off notes")]
      }),

      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({
          text: "🧪 QA / Tester:",
          bold: true
        })]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Tuần 5-7: Vẽ BPMN + Use Case diagram")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Tuần 8-10: Testing dev code, report bugs")]
      }),

      new Paragraph({
        spacing: { after: 240 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Tuần 11-12: Viết Testing section + final checklist")]
      }),

      // === KẾT LUẬN ===
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("🎯 KẾT LUẬN")]
      }),

      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun("Thành công của dự án phụ thuộc vào:")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("✅ Phân tích sâu: Chỉ ra được đúng pain point")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("✅ Thiết kế rõ ràng: Diagrams & Figma phải hiện thực")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("✅ Implementation chất lượng: Code sạch, đúng kỹ thuật")]
      }),

      new Paragraph({
        spacing: { after: 60 },
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("✅ Testing kỹ lưỡng: Tìm ra hết bugs")]
      }),

      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun("✅ Báo cáo chuyên nghiệp: Trình bày logic, dễ hiểu")]
      }),

      new Paragraph({
        spacing: { after: 240 },
        children: [new TextRun({
          text: "🚀 Hãy bắt đầu từ ý tưởng lớn, và từng bước biến nó thành sản phẩm thực tế!",
          bold: true,
          size: 22,
          italic: true,
          color: colors.header
        })]
      })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/mnt/user-data/outputs/PROJECT_INSTRUCTION.docx", buffer);
  console.log("✅ Document created: PROJECT_INSTRUCTION.docx");
});
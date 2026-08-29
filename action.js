
    // Embedded Location Dataset
    const locationsData = [
      {
        "id": "ubnd-tinh",
        "name": "Ủy ban Nhân dân Tỉnh Đồng Tháp",
        "category": "co-quan-hanh-chinh",
        "lat": 10.45520,
        "lng": 105.63240,
        "address": "Số 12, Đường 30/4, Phường 1, TP. Cao Lãnh, Đồng Tháp",
        "phone": "0277.3851.612",
        "desc": "Trụ sở làm việc của Ủy ban Nhân dân tỉnh Đồng Tháp. Nơi điều hành và quản lý các hoạt động hành chính, kinh tế, xã hội toàn tỉnh.",
        "website": "https://dongthap.gov.vn",
        "hours": "07:00 - 17:00 (Thứ 2 - Thứ 6)"
      },
      {
        "id": "so-ttt",
        "name": "Sở Thông tin và Truyền thông Đồng Tháp",
        "category": "co-quan-hanh-chinh",
        "lat": 10.45890,
        "lng": 105.63450,
        "address": "Số 12, Đường Nguyễn Chí Thanh, Phường 5, TP. Cao Lãnh, Đồng Tháp",
        "phone": "0277.3875.999",
        "desc": "Sở thực hiện chức năng tham mưu, giúp Ủy ban nhân dân tỉnh quản lý nhà nước về báo chí, xuất bản, viễn thông, công nghệ thông tin và chuyển đổi số.",
        "website": "https://stttt.dongthap.gov.vn",
        "hours": "07:00 - 17:00 (Thứ 2 - Thứ 6)"
      },
      {
        "id": "tthcc-tinh",
        "name": "Trung tâm Hành chính công Tỉnh Đồng Tháp",
        "category": "dich-vu-cong",
        "lat": 10.45580,
        "lng": 105.63150,
        "address": "Số 27, Đường Nguyễn Thị Minh Khai, Phường 1, TP. Cao Lãnh, Đồng Tháp",
        "phone": "0277.3898.989",
        "desc": "Nơi tiếp nhận và trả kết quả giải quyết thủ tục hành chính cấp tỉnh, hướng dẫn người dân thực hiện các dịch vụ công trực tuyến nhanh chóng.",
        "website": "https://hanhchinhcong.dongthap.gov.vn",
        "hours": "07:30 - 17:00 (Thứ 2 - Thứ 6)"
      },
      {
        "id": "buu-dien-tp",
        "name": "Bưu điện Thành phố Cao Lãnh",
        "category": "dich-vu-cong",
        "lat": 10.45420,
        "lng": 105.63410,
        "address": "Số 85, Đường Nguyễn Huệ, Phường 1, TP. Cao Lãnh, Đồng Tháp",
        "phone": "0277.3851.244",
        "desc": "Trụ sở bưu điện trung tâm thành phố, cung cấp các dịch vụ bưu chính công ích, chuyển phát nhanh, tài chính bưu điện và dịch vụ số.",
        "website": "http://vnpost.vn",
        "hours": "07:00 - 19:00 (Mỗi ngày)"
      },
      {
        "id": "thpt-nguyenquangdieu",
        "name": "Trường THPT Chuyên Nguyễn Quang Diêu",
        "category": "truong-hoc",
        "lat": 10.44420,
        "lng": 105.64180,
        "address": "Đường Lê Đại Hành, Mỹ Phú, TP. Cao Lãnh, Đồng Tháp",
        "phone": "0277.3853.488",
        "desc": "Trường trung học phổ thông chuyên hàng đầu của tỉnh Đồng Tháp, nổi tiếng với thành tích học tập xuất sắc và đào tạo mũi nhọn.",
        "website": "http://c3chuyennguyenquangdieu.dongthap.edu.vn",
        "hours": "07:00 - 17:30 (Thứ 2 - Thứ 7)"
      },
      {
        "id": "dh-dongthap",
        "name": "Trường Đại học Đồng Tháp",
        "category": "truong-hoc",
        "lat": 10.46320,
        "lng": 105.61800,
        "address": "Số 783, Đường Phạm Hữu Lầu, Phường 6, TP. Cao Lãnh, Đồng Tháp",
        "phone": "0277.3881.518",
        "desc": "Trường đại học công lập đa ngành tại khu vực Đồng bằng sông Cửu Long, thế mạnh về đào tạo sư phạm, khoa học tự nhiên và xã hội.",
        "website": "https://dthu.edu.vn",
        "hours": "07:00 - 17:00 (Thứ 2 - Thứ 6)"
      },
      {
        "id": "bv-dakhoa",
        "name": "Bệnh viện Đa khoa Tỉnh Đồng Tháp",
        "category": "tram-y-te",
        "lat": 10.44850,
        "lng": 105.64500,
        "address": "Số 312, Đường Thiên Hộ Dương, Phường 4, TP. Cao Lãnh, Đồng Tháp",
        "phone": "0277.3851.814",
        "desc": "Bệnh viện đa khoa hạng I trực thuộc Sở Y tế, quy mô lớn nhất tỉnh phục vụ chăm sóc sức khỏe và điều trị y tế cho nhân dân khu vực.",
        "website": "http://bvdongthap.vn",
        "hours": "24/7 (Cấp cứu)"
      },
      {
        "id": "ttyte-tp",
        "name": "Trung tâm Y tế Thành phố Cao Lãnh",
        "category": "tram-y-te",
        "lat": 10.45650,
        "lng": 105.64210,
        "address": "Đường Nguyễn Văn Trỗi, Phường 2, TP. Cao Lãnh, Đồng Tháp",
        "phone": "0277.3852.793",
        "desc": "Đơn vị thực hiện các chương trình y tế dự phòng, tiêm chủng mở rộng, khám chữa bệnh ban đầu và quản lý các trạm y tế phường xã.",
        "website": "http://trungtamytecaolanh.com",
        "hours": "07:00 - 17:00 (Mỗi ngày)"
      },
      {
        "id": "nvh-laodong",
        "name": "Nhà Văn hóa Lao động Tỉnh Đồng Tháp",
        "category": "sinh-hoat-cong-dong",
        "lat": 10.45150,
        "lng": 105.63850,
        "address": "Số 181, Đường Ngô Thì Nhậm, Phường 1, TP. Cao Lãnh, Đồng Tháp",
        "phone": "0277.3852.125",
        "desc": "Trung tâm tổ chức các hoạt động văn hóa, văn nghệ, thể dục thể thao, các lớp kỹ năng và sự kiện cộng đồng cho công nhân, viên chức và người dân.",
        "website": "N/A",
        "hours": "07:30 - 21:00 (Mỗi ngày)"
      },
      {
        "id": "qt-vanmieu",
        "name": "Quảng trường Văn Miếu Cao Lãnh",
        "category": "sinh-hoat-cong-dong",
        "lat": 10.45230,
        "lng": 105.62950,
        "address": "Đường Lý Thường Kiệt, Phường 1, TP. Cao Lãnh, Đồng Tháp",
        "phone": "N/A",
        "desc": "Không gian xanh công cộng lớn ngay trung tâm thành phố, là nơi diễn ra các lễ hội đường phố, triển lãm hoa xuân và các hoạt động thể thao ngoài trời.",
        "website": "N/A",
        "hours": "24/24"
      },
      {
        "id": "dt-nguyensinhsac",
        "name": "Khu Di tích Cụ Phó bảng Nguyễn Sinh Sắc",
        "category": "van-hoa-lich-su",
        "lat": 10.45020,
        "lng": 105.62310,
        "address": "Số 137, Đường Phạm Hữu Lầu, Phường 4, TP. Cao Lãnh, Đồng Tháp",
        "phone": "0277.3851.127",
        "desc": "Di tích quốc gia đặc biệt, nơi an nghỉ của Thân sinh Chủ tịch Hồ Chí Minh. Khuôn viên rộng lớn tích hợp nhà sàn Bác Hồ mô phỏng và làng hòa an xưa.",
        "website": "http://khuditichnguyensinhsac.vn",
        "hours": "07:00 - 17:30 (Mỗi ngày)"
      },
      {
        "id": "bt-dongthap",
        "name": "Bảo tàng Tỉnh Đồng Tháp",
        "category": "van-hoa-lich-su",
        "lat": 10.45720,
        "lng": 105.62720,
        "address": "Số 226, Đường Nguyễn Thái Học, Phường 4, TP. Cao Lãnh, Đồng Tháp",
        "phone": "0277.3851.342",
        "desc": "Nơi trưng bày hàng ngàn tài liệu, hiện vật lịch sử về cuộc đấu tranh giải phóng dân tộc, văn hóa Óc Eo cổ đại và đời sống người dân vùng sông nước Đồng Tháp.",
        "website": "http://baotangdongthap.com",
        "hours": "07:30 - 17:00 (Mỗi ngày)"
      },
      {
        "id": "tpl-congdong",
        "name": "Văn phòng Hỗ trợ Pháp lý Cộng đồng",
        "category": "ho-tro-nguoi-dan",
        "lat": 10.45590,
        "lng": 105.63680,
        "address": "Số 45, Đường Tôn Đức Thắng, Phường 1, TP. Cao Lãnh, Đồng Tháp",
        "phone": "0277.3891.122",
        "desc": "Điểm tư vấn pháp luật miễn phí cho người nghèo, đối tượng chính sách, đồng bào khó khăn nhằm bảo vệ quyền và lợi ích hợp pháp của công dân.",
        "website": "N/A",
        "hours": "07:30 - 17:00 (Thứ 2 - Thứ 6)"
      },
      {
        "id": "ttbt-xahoi",
        "name": "Trung tâm Bảo trợ Xã hội Đồng Tháp",
        "category": "ho-tro-nguoi-dan",
        "lat": 10.44800,
        "lng": 105.63900,
        "address": "Số 150, Đường Trần Hưng Đạo, Phường 3, TP. Cao Lãnh, Đồng Tháp",
        "phone": "0277.3852.121",
        "desc": "Nơi tiếp nhận, chăm sóc, nuôi dưỡng người già neo đơn, trẻ em mồ côi và các đối tượng bảo trợ xã hội có hoàn cảnh đặc biệt khó khăn.",
        "website": "N/A",
        "hours": "24/24"
      },
      {
        "id": "htx-xoaicaolanh",
        "name": "Hợp tác xã Xoài Cao Lãnh",
        "category": "ho-kinh-doanh",
        "lat": 10.46500,
        "lng": 105.65200,
        "address": "Ấp Tịnh Mỹ, Xã Tịnh Thới, TP. Cao Lãnh, Đồng Tháp",
        "phone": "0918.234.567",
        "desc": "Hợp tác xã nông nghiệp chuyên trồng và tiêu thụ sản phẩm Xoài Cát Chu và Xoài Cao Lãnh nổi tiếng đạt chuẩn VietGAP, GlobalGAP.",
        "website": "N/A",
        "hours": "07:00 - 17:00 (Mỗi ngày)"
      },
      {
        "id": "gt-ocop",
        "name": "Điểm giới thiệu sản phẩm OCOP Đồng Tháp",
        "category": "ho-kinh-doanh",
        "lat": 10.45320,
        "lng": 105.63350,
        "address": "Số 55, Đường Điện Biên Phủ, Phường Mỹ Phú, TP. Cao Lãnh, Đồng Tháp",
        "phone": "0945.678.910",
        "desc": "Showroom chính thức trưng bày và bán các sản phẩm đạt chứng nhận OCOP của tỉnh: sen sấy, nước mắm, trà sen, bánh phồng tôm Sa Giang và trái cây sạch.",
        "website": "https://ocopdongthap.vn",
        "hours": "07:30 - 21:00 (Mỗi ngày)"
      }
    ];

    // Categories Configuration
    const categories = {
      'co-quan-hanh-chinh': {
        name: 'Cơ quan hành chính',
        icon: 'fa-building-columns',
        color: '#ef4444', // Red
        bgClass: 'bg-red-500',
        textClass: 'text-red-500',
        borderClass: 'border-red-500',
        lightBg: 'bg-red-50 dark:bg-red-950/30'
      },
      'dich-vu-cong': {
        name: 'Điểm hỗ trợ dịch vụ công',
        icon: 'fa-laptop-file',
        color: '#06b6d4', // Cyan
        bgClass: 'bg-cyan-500',
        textClass: 'text-cyan-500',
        borderClass: 'border-cyan-500',
        lightBg: 'bg-cyan-50 dark:bg-cyan-950/30'
      },
      'truong-hoc': {
        name: 'Trường học',
        icon: 'fa-graduation-cap',
        color: '#6366f1', // Indigo
        bgClass: 'bg-indigo-500',
        textClass: 'text-indigo-500',
        borderClass: 'border-indigo-500',
        lightBg: 'bg-indigo-50 dark:bg-indigo-950/30'
      },
      'tram-y-te': {
        name: 'Trạm y tế / Bệnh viện',
        icon: 'fa-heart-pulse',
        color: '#10b981', // Emerald
        bgClass: 'bg-emerald-500',
        textClass: 'text-emerald-500',
        borderClass: 'border-emerald-500',
        lightBg: 'bg-emerald-50 dark:bg-emerald-950/30'
      },
      'sinh-hoat-cong-dong': {
        name: 'Điểm sinh hoạt cộng đồng',
        icon: 'fa-users',
        color: '#f59e0b', // Amber
        bgClass: 'bg-amber-500',
        textClass: 'text-amber-500',
        borderClass: 'border-amber-500',
        lightBg: 'bg-amber-50 dark:bg-amber-950/30'
      },
      'van-hoa-lich-su': {
        name: 'Văn hóa – Lịch sử',
        icon: 'fa-monument',
        color: '#f43f5e', // Rose
        bgClass: 'bg-rose-500',
        textClass: 'text-rose-500',
        borderClass: 'border-rose-500',
        lightBg: 'bg-rose-50 dark:bg-rose-950/30'
      },
      'ho-tro-nguoi-dan': {
        name: 'Các điểm hỗ trợ người dân',
        icon: 'fa-hand-holding-heart',
        color: '#ec4899', // Pink
        bgClass: 'bg-pink-500',
        textClass: 'text-pink-500',
        borderClass: 'border-pink-500',
        lightBg: 'bg-pink-50 dark:bg-pink-950/30'
      },
      'ho-kinh-doanh': {
        name: 'Hộ kinh doanh / OCOP',
        icon: 'fa-store',
        color: '#a855f7', // Purple
        bgClass: 'bg-purple-500',
        textClass: 'text-purple-500',
        borderClass: 'border-purple-500',
        lightBg: 'bg-purple-50 dark:bg-purple-950/30'
      }
    };

    // Global variables
    let map;
    let markersMap = {};
    let selectedCategories = new Set(Object.keys(categories));
    let searchQuery = '';
    let qrcodeInstance = null;
    let selectedLocation = null;

    // DOM Elements
    const categoriesGrid = document.getElementById('categoriesGrid');
    const locationList = document.getElementById('locationList');
    const resultsCount = document.getElementById('resultsCount');
    const resetFiltersBtn = document.getElementById('resetFiltersBtn');
    
    const searchDesktop = document.getElementById('searchDesktop');
    const clearSearchDesktop = document.getElementById('clearSearchDesktop');
    const searchMobile = document.getElementById('searchMobile');
    const clearSearchMobile = document.getElementById('clearSearchMobile');

    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const toggleSidebarFloatingBtn = document.getElementById('toggleSidebarFloatingBtn');
    const closeSidebarBtn = document.getElementById('closeSidebarBtn');

    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const shareMapBtn = document.getElementById('shareMapBtn');

    const detailsModal = document.getElementById('detailsModal');
    const modalCard = document.getElementById('modalCard');
    const closeModalBtn = document.getElementById('closeModalBtn');
    
    const modalCategoryBadge = document.getElementById('modalCategoryBadge');
    const modalName = document.getElementById('modalName');
    const modalDesc = document.getElementById('modalDesc');
    const modalAddress = document.getElementById('modalAddress');
    const modalPhoneLink = document.getElementById('modalPhoneLink');
    const modalWebsiteWrapper = document.getElementById('modalWebsiteWrapper');
    const modalWebsiteLink = document.getElementById('modalWebsiteLink');
    const modalHoursWrapper = document.getElementById('modalHoursWrapper');
    const modalHours = document.getElementById('modalHours');
    const qrcodeContainer = document.getElementById('qrcodeContainer');
    
    const copyShareLinkBtn = document.getElementById('copyShareLinkBtn');
    const googleMapsDirectionBtn = document.getElementById('googleMapsDirectionBtn');
    const locateMeBtn = document.getElementById('locateMeBtn');

    // Initialize Application
    document.addEventListener('DOMContentLoaded', () => {
      initTheme();
      initCategoriesFilter();
      initMap();
      renderMarkers();
      renderLocationList();
      initEvents();
      
      // Auto-focus location if query param ID exists
      checkUrlParameters();
    });

    // Theme Management
    function initTheme() {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }

    function toggleTheme() {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
      } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      }
    }

    // Initialize Map (Leaflet.js)
    // Initialize Map (Leaflet.js)
function initMap() {
  // Tọa độ Cao Lãnh: 10.4530, 105.6350
  map = L.map('map', {
    zoomControl: false, 
    attributionControl: true
  }).setView([10.4530, 105.6350], 14);

  // Vị trí nút Zoom
  L.control.zoom({
    position: 'bottomleft'
  }).addTo(map);

  // Nguồn tile ESRI World Street Map (Chuẩn giao diện như hình)
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 19,
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
  }).addTo(map);

  // Tự động căn chỉnh kích thước khung hiển thị
  setTimeout(() => {
    map.invalidateSize();
  }, 300);

      // 1. Cấu hình Tile OpenMap.vn
      const openMapApiKey = 'OOORGztKtRbHiWPAWBVvExIYjjdErXNy'; 
      const openMapUrl = 'https://api.openmap.vn/tiles/{z}/{x}/{y}.png?apikey=' + openMapApiKey;
      const openMapAttr = '&copy; <a href="https://openmap.vn" target="_blank">Openmap.vn</a>';

      // 2. Cấu hình Tile dự phòng OpenStreetMap
      const osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      const osmAttr = '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors';

      // 3. Khởi tạo Tile Layer ban đầu với OpenMap.vn
      const tileLayer = L.tileLayer(openMapUrl, {
        maxZoom: 19,
        attribution: openMapAttr
      }).addTo(map);

      // 4. XỬ LÝ DỰ PHÒNG: Tự động đổi sang OpenStreetMap nếu OpenMap.vn bị lỗi API Key
      tileLayer.on('tileerror', function() {
        console.warn('Không thể tải bản đồ từ OpenMap.vn. Tự động chuyển sang OpenStreetMap dự phòng...');
        tileLayer.setUrl(osmUrl);
        if (map.attributionControl) {
          map.attributionControl.removeAttribution(openMapAttr);
          map.attributionControl.addAttribution(osmAttr);
        }
      });

      // Tự động căn lại kích thước bản đồ để tránh bị vỡ/xám
      setTimeout(() => {
        map.invalidateSize();
      }, 500);
    
    }
    // Populate Sidebar Category Checkboxes
    function initCategoriesFilter() {
      categoriesGrid.innerHTML = '';
      Object.entries(categories).forEach(([key, value]) => {
        const item = document.createElement('label');
        item.className = 'flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50';
        
        item.innerHTML = `
          <div class="flex items-center space-x-2.5">
            <span class="w-7 h-7 rounded-lg flex items-center justify-center text-white ${value.bgClass} shadow-sm">
              <i class="fa-solid ${value.icon} text-xs"></i>
            </span>
            <span class="text-xs font-semibold text-slate-700 dark:text-slate-300 select-none">${value.name}</span>
          </div>
          <input 
            type="checkbox" 
            value="${key}" 
            checked
            class="w-4.5 h-4.5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
          />
        `;
        
        const checkbox = item.querySelector('input');
        checkbox.addEventListener('change', (e) => {
          if (e.target.checked) {
            selectedCategories.add(key);
          } else {
            selectedCategories.delete(key);
          }
          filterData();
        });

        categoriesGrid.appendChild(item);
      });
    }

    // Create custom pulsing map markers using Tailwind CSS
    function createCustomMarker(loc) {
      const cat = categories[loc.category];
      const iconHtml = `
        <div class="relative flex items-center justify-center">
          <span class="animate-ping absolute inline-flex h-8 w-8 rounded-full ${cat.bgClass} opacity-30"></span>
          <div class="relative flex items-center justify-center w-8 h-8 rounded-full shadow-lg border-2 border-white dark:border-slate-900 text-white ${cat.bgClass} transition-transform hover:scale-110">
            <i class="fa-solid ${cat.icon} text-xs"></i>
          </div>
          <div class="w-2 h-2 ${cat.bgClass} rotate-45 -mt-1 border-r border-b border-white dark:border-slate-900 absolute -bottom-1"></div>
        </div>
      `;

      return L.divIcon({
        className: 'custom-leaflet-marker',
        html: iconHtml,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
      });
    }

    // Render Markers on Map
    function renderMarkers() {
      // Clear old markers
      Object.values(markersMap).forEach(m => map.removeLayer(m));
      markersMap = {};

      locationsData.forEach(loc => {
        const marker = L.marker([loc.lat, loc.lng], { icon: createCustomMarker(loc) });
        
        // Simple Popup
        const popupContent = `
          <div class="p-1 font-sans">
            <div class="text-xs font-semibold ${categories[loc.category].textClass} uppercase tracking-wider mb-0.5">
              ${categories[loc.category].name}
            </div>
            <h4 class="font-bold text-sm text-slate-900 dark:text-white">${loc.name}</h4>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">${loc.address}</p>
            <button 
              onclick="openDetails('${loc.id}')"
              class="w-full mt-2 py-1 bg-emerald-50 hover:bg-emerald-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-emerald-700 dark:text-emerald-400 font-bold text-xs rounded transition-colors"
            >
              Chi tiết & Quét QR
            </button>
          </div>
        `;
        
        marker.bindPopup(popupContent, { maxWidth: 220 });
        markersMap[loc.id] = marker;

        // If category is selected, render on map
        if (selectedCategories.has(loc.category)) {
          marker.addTo(map);
        }
      });
    }

    // Render Location List in Sidebar
    function renderLocationList() {
      locationList.innerHTML = '';
      
      const filtered = locationsData.filter(loc => {
        const matchesCategory = selectedCategories.has(loc.category);
        const matchesSearch = loc.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              loc.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              loc.desc.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      });

      resultsCount.textContent = filtered.length;

      if (filtered.length === 0) {
        locationList.innerHTML = `
          <div class="p-8 text-center text-slate-400 dark:text-slate-500 font-medium">
            <i class="fa-solid fa-map-pin text-3xl mb-2.5 opacity-40"></i>
            <p class="text-sm">Không tìm thấy địa điểm nào khớp với bộ lọc hiện tại.</p>
          </div>
        `;
        return;
      }

      filtered.forEach(loc => {
        const cat = categories[loc.category];
        const item = document.createElement('div');
        item.className = 'p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 border border-transparent hover:border-slate-100 dark:hover:border-slate-800/80 cursor-pointer transition-all duration-200 flex space-x-3';
        
        item.innerHTML = `
          <div class="w-8 h-8 rounded-lg ${cat.lightBg} ${cat.textClass} flex items-center justify-center shrink-0 shadow-sm">
            <i class="fa-solid ${cat.icon} text-sm"></i>
          </div>
          <div class="flex-1 min-w-0">
            <h4 class="font-bold text-sm text-slate-800 dark:text-slate-100 truncate">${loc.name}</h4>
            <p class="text-xs text-slate-400 dark:text-slate-500 truncate mt-0.5">${loc.address}</p>
            <div class="flex items-center space-x-2 mt-1.5">
              <span class="text-[10px] font-bold px-1.5 py-0.5 rounded-md ${cat.lightBg} ${cat.textClass} border border-slate-200/20">
                ${cat.name}
              </span>
              ${loc.phone !== 'N/A' ? `
                <span class="text-[10px] text-slate-400 dark:text-slate-500 font-semibold flex items-center gap-0.5">
                  <i class="fa-solid fa-phone text-[8px]"></i> ${loc.phone}
                </span>
              ` : ''}
            </div>
          </div>
        `;

        item.addEventListener('click', () => {
          focusAndOpenLocation(loc);
          // Collapse sidebar on mobile
          if (window.innerWidth < 768) {
            closeSidebar();
          }
        });

        locationList.appendChild(item);
      });
    }

    // Filter Logic combining Search and Categories
    function filterData() {
      // Toggle map markers visibility
      locationsData.forEach(loc => {
        const marker = markersMap[loc.id];
        const matchesCategory = selectedCategories.has(loc.category);
        const matchesSearch = loc.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              loc.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              loc.desc.toLowerCase().includes(searchQuery.toLowerCase());

        if (matchesCategory && matchesSearch) {
          if (!map.hasLayer(marker)) {
            marker.addTo(map);
          }
        } else {
          if (map.hasLayer(marker)) {
            map.removeLayer(marker);
          }
        }
      });

      renderLocationList();
    }

    // Reset Filters
    function resetFilters() {
      // Reset search
      searchDesktop.value = '';
      searchMobile.value = '';
      clearSearchDesktop.classList.add('hidden');
      clearSearchMobile.classList.add('hidden');
      searchQuery = '';

      // Reset Category list
      selectedCategories = new Set(Object.keys(categories));
      const checkboxes = categoriesGrid.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(cb => cb.checked = true);

      // Re-trigger
      filterData();
    }

    // Focus Location on Map & Open Detail modal
    function focusAndOpenLocation(loc) {
      selectedLocation = loc;
      
      // Pan and zoom
      map.setView([loc.lat, loc.lng], 16);
      
      // Open leaflet popup
      const marker = markersMap[loc.id];
      if (marker) {
        marker.openPopup();
      }

      openDetails(loc.id);
    }

    // Open Modal and Generate QR Code
    function openDetails(id) {
      const loc = locationsData.find(l => l.id === id);
      if (!loc) return;
      
      selectedLocation = loc;
      const cat = categories[loc.category];

      // Update Modal Contents
      modalCategoryBadge.className = `flex items-center space-x-1.5 text-xs font-bold px-2.5 py-1.5 rounded-full ${cat.lightBg} ${cat.textClass} border ${cat.borderClass}/30`;
      modalCategoryBadge.innerHTML = `<i class="fa-solid ${cat.icon}"></i> <span>${cat.name}</span>`;
      
      modalName.textContent = loc.name;
      modalDesc.textContent = loc.desc;
      modalAddress.textContent = loc.address;
      
      if (loc.phone !== 'N/A') {
        modalPhoneLink.textContent = loc.phone;
        modalPhoneLink.href = `tel:${loc.phone}`;
        modalPhoneLink.parentElement.parentElement.classList.remove('hidden');
      } else {
        modalPhoneLink.parentElement.parentElement.classList.add('hidden');
      }

      if (loc.website && loc.website !== 'N/A') {
        modalWebsiteLink.textContent = loc.website;
        modalWebsiteLink.href = loc.website;
        modalWebsiteWrapper.classList.remove('hidden');
      } else {
        modalWebsiteWrapper.classList.add('hidden');
      }

      if (loc.hours && loc.hours !== 'N/A') {
        modalHours.textContent = loc.hours;
        modalHoursWrapper.classList.remove('hidden');
      } else {
        modalHoursWrapper.classList.add('hidden');
      }

      // Google Maps Direct Direction Link
      googleMapsDirectionBtn.href = `https://www.google.com/maps/search/?api=1&query=${loc.lat},${loc.lng}`;

      // Generate dynamic QR Code containing unique sharing URL
      const shareUrl = `${window.location.origin}${window.location.pathname}?id=${loc.id}`;
      
      qrcodeContainer.innerHTML = '';
      if (qrcodeInstance) {
        qrcodeInstance = null;
      }
      
      // Instantiate new QR code inside modal container
      qrcodeInstance = new QRCode(qrcodeContainer, {
        text: shareUrl,
        width: 140,
        height: 140,
        colorDark: '#0f172a',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
      });

      // Show Modal
      detailsModal.classList.remove('hidden');
      setTimeout(() => {
        detailsModal.classList.remove('opacity-0');
        modalCard.classList.remove('scale-95');
        modalCard.classList.add('scale-100');
      }, 50);
    }

    function closeModal() {
      detailsModal.classList.add('opacity-0');
      modalCard.classList.remove('scale-100');
      modalCard.classList.add('scale-95');
      
      setTimeout(() => {
        detailsModal.classList.add('hidden');
      }, 300);
    }

    // Check query parameter of the URL (?id=LOCATION_ID)
    function checkUrlParameters() {
      const urlParams = new URLSearchParams(window.location.search);
      const targetId = urlParams.get('id');
      if (targetId) {
        const loc = locationsData.find(l => l.id === targetId);
        if (loc) {
          // Allow some time for Leaflet map elements to fully render
          setTimeout(() => {
            focusAndOpenLocation(loc);
          }, 600);
        }
      }
    }

    // Copy map sharing links
    function copyShareLink() {
      if (!selectedLocation) return;
      const shareUrl = `${window.location.origin}${window.location.pathname}?id=${selectedLocation.id}`;
      copyTextToClipboard(shareUrl, 'Đã sao chép liên kết địa điểm này!');
    }

    function copyMapLink() {
      const shareUrl = `${window.location.origin}${window.location.pathname}`;
      copyTextToClipboard(shareUrl, 'Đã sao chép liên kết Bản đồ số Cao Lãnh!');
    }

    function copyTextToClipboard(text, successMessage) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMessage);
      }, (err) => {
        alert('Không thể sao chép liên kết: ' + err);
      });
    }

    // Toast alert implementation
    function showToast(message) {
      const toast = document.createElement('div');
      toast.className = 'fixed bottom-20 left-1/2 transform -translate-x-1/2 z-[1000] px-4 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl shadow-xl flex items-center space-x-2 border border-slate-800 opacity-0 transition-opacity duration-300';
      toast.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-500 text-sm"></i> <span>${message}</span>`;
      
      document.body.appendChild(toast);
      
      setTimeout(() => {
        toast.classList.remove('opacity-0');
      }, 50);

      setTimeout(() => {
        toast.classList.add('opacity-0');
        setTimeout(() => toast.remove(), 300);
      }, 2500);
    }

    // Mobile sidebar toggle controls
    function openSidebar() {
      sidebar.classList.remove('-translate-x-full');
      sidebarOverlay.classList.remove('hidden');
    }

    function closeSidebar() {
      sidebar.classList.add('-translate-x-full');
      sidebarOverlay.classList.add('hidden');
    }

    // Setup Event Listeners
    function initEvents() {
      // Theme toggle button
      themeToggleBtn.addEventListener('click', toggleTheme);

      // Search filters
      const handleSearch = (e, clearBtn) => {
        searchQuery = e.target.value;
        if (searchQuery.length > 0) {
          clearBtn.classList.remove('hidden');
        } else {
          clearBtn.classList.add('hidden');
        }
        filterData();
      };

      searchDesktop.addEventListener('input', (e) => handleSearch(e, clearSearchDesktop));
      searchMobile.addEventListener('input', (e) => handleSearch(e, clearSearchMobile));

      clearSearchDesktop.addEventListener('click', () => {
        searchDesktop.value = '';
        clearSearchDesktop.classList.add('hidden');
        searchQuery = '';
        filterData();
      });

      clearSearchMobile.addEventListener('click', () => {
        searchMobile.value = '';
        clearSearchMobile.classList.add('hidden');
        searchQuery = '';
        filterData();
      });

      // Reset button
      resetFiltersBtn.addEventListener('click', resetFilters);

      // Floating button sidebar triggers
      toggleSidebarFloatingBtn.addEventListener('click', openSidebar);
      closeSidebarBtn.addEventListener('click', closeSidebar);
      sidebarOverlay.addEventListener('click', closeSidebar);

      // Share links
      shareMapBtn.addEventListener('click', copyMapLink);
      copyShareLinkBtn.addEventListener('click', copyShareLink);

      // Modal window closures
      closeModalBtn.addEventListener('click', closeModal);
      detailsModal.addEventListener('click', (e) => {
        if (e.target === detailsModal) {
          closeModal();
        }
      });

      // ESC key to close modal
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeModal();
          closeSidebar();
        }
      });

      // Locate me user feature
      locateMeBtn.addEventListener('click', () => {
        if (navigator.geolocation) {
          locateMeBtn.innerHTML = '<i class="fa-solid fa-spinner animate-spin text-lg"></i>';
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              const userLat = pos.coords.latitude;
              const userLng = pos.coords.longitude;
              
              // Draw user location on map
              const userIcon = L.divIcon({
                className: 'user-marker',
                html: `
                  <div class="relative flex items-center justify-center">
                    <span class="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-blue-500 opacity-60"></span>
                    <div class="w-4.5 h-4.5 bg-blue-600 rounded-full border-2 border-white shadow-md"></div>
                  </div>
                `,
                iconSize: [18, 18],
                iconAnchor: [9, 9]
              });

              L.marker([userLat, userLng], { icon: userIcon }).addTo(map)
                .bindPopup('<span class="font-bold text-xs text-slate-800">Vị trí hiện tại của bạn</span>')
                .openPopup();

              map.setView([userLat, userLng], 15);
              locateMeBtn.innerHTML = '<i class="fa-solid fa-crosshairs text-lg"></i>';
            },
            (err) => {
              alert('Không thể xác định vị trí của bạn. Vui lòng cho phép quyền truy cập vị trí trong trình duyệt.');
              locateMeBtn.innerHTML = '<i class="fa-solid fa-crosshairs text-lg"></i>';
            }
          );
        } else {
          alert('Trình duyệt của bạn không hỗ trợ định vị vị trí.');
        }
      });
    }

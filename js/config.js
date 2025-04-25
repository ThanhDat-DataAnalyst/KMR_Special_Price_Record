// config.js - Dữ liệu cấu hình cho toàn bộ ứng dụng

const CONFIG = {
  // Dữ liệu các khu vực và teams
  REGIONS: {
    hanoi: {
      name: 'Khu vực Miền Bắc',
      teams: [
        { 
          id: 'sme_hn', 
          name: 'SME Horeca Miền Bắc', 
          icon: '👥', 
          description: '', 
          emails: ['tam.le@kamereo.vn','thaonguyen@kamereo.vn'], 
          sheet_id: '1Yib-LG1VBlXruGJcZgEmjE3Qf9Ct37wZKeefTfbtKMk',
          sheet_name: 'Sheet1'
        },
        { 
          id: 'ka_mt_hn', 
          name: 'KA MT Miền Bắc', 
          icon: '🛒', 
          description: '',
          emails: ['tam.le@kamereo.vn','tu.hoang@kamereo.vn'],
          sheet_id: '1YaI4aeh8mJ5i1g7fM2JJUSezVDISXAYFbQPH5NEbSUo',
          sheet_name: 'Sheet1'
        },
        { 
          id: 'ka_fc_hn', 
          name: 'KA FC Miền Bắc', 
          icon: '🏢', 
          description: '',
          emails: ['tam.le@kamereo.vn','tuuyen.nguyen@kamereo.vn', 'van.nguyen@kamereo.vn','trang.doan@kamereo.vn','san.le@kamereo.vn'],
          sheet_id: '1nRYjW0X5NWB5F-XmvMJsmQ-8mgr0UU8gm4ZGUYb5nSU',
          sheet_name: 'Sheet1'
        },
        { 
          id: 'ka_school_hn', 
          name: 'KA School-Factory Miền Bắc', 
          icon: '🏫', 
          description: '',
          emails: ['tam.le@kamereo.vn','van.nguyen@kamereo.vn','trang.doan@kamereo.vn','tuuyen.nguyen@kamereo.vn'],
          sheet_id: '1SvBqFeDML8vCknUf19Pggy8tsc60nEVkhhRZz2gbmP4',
          sheet_name: 'Sheet1'
        },
        { 
          id: 'ka_hotel_hn', 
          name: 'KA Hotel-Convention Miền Bắc', 
          icon: '🏨', 
          description: '',
          emails: ['tam.le@kamereo.vn','tuyen.nguyen@kamereo.vn'],
          sheet_id: '1GI3U3TTvxds0IQBBj-TFhA3YuEevXRYPUQ1XClxN1rw',
          sheet_name: 'Sheet1'
        }
      ]
    },
    hcm: {
      name: 'Khu vực Miền Nam',
      teams: [
        { 
          id: 'sme_hcm', 
          name: 'SME Horeca Miền Nam', 
          icon: '👥', 
          description: '',
          emails: ['phong.ha@kamereo.vn','hieu.ngoc@kamereo.vn', 'vi.dang@kamereo.vn','duong.doan@kamereo.vn','tri.nguyen@kamereo.vn','kien.huynh@kamereo.vn','tram.nguyen@kamereo.vn','diuthuong.nguyen@kamereo.vn','yen.nguyen@kamereo.vn','nhan.luu@kamereo.vn','nguyen.hoang@kamereo.vn'],
          sheet_id: '1XkHZ_0PBzBLL-rhW5Ldb5YkxRfXm_WJKQrRYCgd7W5I',
          sheet_name: 'Sheet1'
        },
        { 
          id: 'ka_mt_hcm', 
          name: 'KA MT Miền Nam', 
          icon: '🛒', 
          description: '',
          emails: ['thanhphong.pham@kamereo.vn','mythanh.tran@kamereo.vn','mai.vu@kamereo.vn','han.vu@kamereo.vn'],
          sheet_id: '1-6pZBacYy_OPhnKE7hMEnHxdXqcXLIkn_H7jdEDZIz0',
          sheet_name: 'Sheet1'
        },
        { 
          id: 'ka_fc_hcm', 
          name: 'KA FC Miền Nam', 
          icon: '🏢', 
          description: '',
          emails: ['ducphong.nguyen@kamereo.vn','san.le@kamereo.vn','trongnhan.nguyen@kamereo.vn','han.vu@kamereo.vn'],
          sheet_id: '1UIxh6YeaRgU85pa21nhpe15bUBtTywn5LoK8tafbSJ4',
          sheet_name: 'Sheet1'
        },
        { 
          id: 'ka_school_hcm', 
          name: 'KA School-Factory Miền Nam', 
          icon: '🏫', 
          description: '',
          emails: [ 'ngocanh.tran@kamereo.vn','man.mai@kamereo.vn'],
          sheet_id: '1WTPREnRKUFKXO8sxy509jkch0SwmLwJc7UgXCUGvhTA',
          sheet_name: 'Sheet1'
        },
        { 
          id: 'ka_hotel_hcm', 
          name: 'KA Hotel-Convention Miền Nam', 
          icon: '🏨', 
          description: '',
          emails: [ 'haiphuong.le@kamereo.vn','camlinh.nguyen@kamereo.vn'],
          sheet_id: '1uQBVYigXFHoIFcGYr2XDcGDT273WV-SxiTSmcUpV5Jk',
          sheet_name: 'Sheet1'
        }
      ]
    }
  },

  // Danh sách admin có quyền truy cập mọi team - Giữ nguyên
  ADMINS: ['viet.truong@kamereo.vn','dat.pham@kamereo.vn', 'khanh.le@kamereo.vn','thanhbinh.le@kamereo.vn','kien.le@kamereo.vn'],

  // Thời gian phiên làm việc (giờ) - Giữ nguyên
  SESSION_DURATION: 8,
  
  // URL sheet mặc định cho admin nếu cần - Giữ nguyên
  DEFAULT_SHEET_URL: 'https://docs.google.com/spreadsheets/d/1MHrocjehDrOyYgg7sxAI1Coa1WWmu5xynbZGfgRek08/edit?gid=0#gid=0',
  DEFAULT_SHEET_ID: '1MHrocjehDrOyYgg7sxAI1Coa1WWmu5xynbZGfgRek08',
  DEFAULT_SHEET_NAME: 'Sheet1',
  
  // URL của Google Apps Script Web App 
  SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbz6UAGgPphZOfxbRJRoS37g_K7WW4xLa-VnVSFhwXw-HMomXjSDwlTQr_csBUXVBmSs/exec',
  
  // Cấu hình Google OAuth - Giữ nguyên
  GOOGLE_AUTH: {
    CLIENT_ID: '252140887716-99uet6je2g4r4nouqdrom4jdp93cm9dc.apps.googleusercontent.com',
    HOSTED_DOMAIN: 'kamereo.vn'
  },
  
  // Cấu hình ứng dụng - Giữ nguyên
  APP: {
    NAME: '[BOS] KMR Special Price Record',
    VERSION: '1.0.0',
    REQUIRED_FIELDS: [
      'priceType', 
      'startDate', 
      'endDate', 
      'buyers', 
      'products'
    ],
    MIN_PRICE: 1000,
    MAX_DURATION_MONTHS: 3
  },
  
  // Cấu hình debug và phát triển
  DEBUG: {
    ENABLED: true,
    LOG_LEVEL: 'info',
    MOCK_API: false
  }
};

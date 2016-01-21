from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from django.test import LiveServerTestCase


class NewVisitorTest(LiveServerTestCase):

    def setUp(self):
        profile = webdriver.FirefoxProfile()
        profile.set_preference('browser.startup.homepage', 'about:blank')
        profile.set_preference('startup.homepage_welcome_url', 'about:blank')
        profile.set_preference('startup.homepage_welcome_url.additional', 'about:blank')
        self.browser = webdriver.Firefox(profile)
        self.browser.implicitly_wait(3)


    def tearDown(self):
        self.browser.quit()
        
    
    def test_admin_registered(self):
        #首頁點選註冊按鈕
        self.browser.get(self.live_server_url)
        self.browser.find_element_by_id('registered').click()
        seanRegisteredURL = self.browser.current_url
        self.assertRegex(seanRegisteredURL, '/registered')
        self.fail('finish test')

        #輸入姓名、email、資訊部email(特定mail判定)、密碼、手機號碼、
        #按下註冊按鈕
        ##確認資料庫權限為最高權限
        
    
    
    #def test_admin_login(self):
        #首頁點選登入按鈕
        ##進入login頁面
        ##form表單，email、密碼欄位、登入按鈕
        #輸入帳號密碼
        #按下登入按鈕
        
    
    
    #def test_second_admin_registered(self):
        #首頁點選註冊按鈕
        #輸入姓名、email、資訊部email、密碼、手機號碼、
        #按下註冊按鈕
        #最高權限會員登入
        #修改該使用者權限
        #登入系統
        
        
    
    #def test_second_admin_manage_new_post(self):
        #
        #
        #
        
        
    
    #def test_user_registered(self):
        #首頁點選註冊按鈕
        #輸入姓名、email、資訊部email、密碼、手機號碼、EA啟動代碼
        #輸入錯誤，按下reset重新輸入
        #輸入姓名、email、資訊部email、密碼、手機號碼、EA啟動代碼
        #按下註冊按鈕（檢查是否皆輸入資訊..資訊部email選填）
        
    
    
    #def  test_visitor_login(self):
        #使用者點選登入按鈕
        #輸入帳號密碼
        #檢查帳號是否啟用
        #分析使用者等級、是否顯示管理者界面、最高管理權限
        #畫面跳轉到管理系統畫面
        
    
    #def test_visitor_look_news(self):
        #查看最新公告清單（登入後呈現）
        #是否有多筆資料
        #點選第一筆最新公告（檢查主題、內容、作者是否正常呈現）
        
    
        
    #def test_visitor_ea_download(self):
        #查看自動交易系統清單（星座系列）(多筆）
        #下載第一個自動交易系統檔案（abc.ex4)
        #確認成功下載
        
    
    
    #def test_visitor_apply_ea_permission(self):
        #
        #
        #
        
    
    
    #def test_visitor_apply_change_person_data(self):
        #
        #
        #
        
    
    
    #def test_visitor_show_accounting_report(self):
        #
        #
        #
        
    
    



    
from django.http import HttpRequest
from django.core.urlresolvers import resolve
from django.test import TestCase
from django.shortcuts import render
from registration import views, models
# Create your tests here.

class registration_test(TestCase):
    def test_registration_page_can_save_a_POST_request(self):
        request = HttpRequest()
        request.method='POST'
        #request.POST['userName', 'email', 'upperEmail', 'password', 'cellphone', 'depot'] = ['RockMan',' tank@test.tw', 'test@admin.tw', '123546', '0987654321', '12345678']
        request.POST['userName'] = 'RockMan'
        request.POST['email'] = 'tank@test.tw'
        request.POST['upperEmail'] = 'test@admin.tw'
        request.POST['password'] = '123456'        
        request.POST['phone'] = '0987654321'
        request.POST['depot'] = '12354678'
                
        views.registration(request)
        userData = models.UserData.objects.all()[0]
        self.assertEqual(request.POST['userName'], userData.userName)
        self.assertEqual(request.POST['email'], userData.email)
        self.assertEqual(request.POST['upperEmail'], userData.upperEmail)
        self.assertEqual(request.POST['password'], userData.password)
        self.assertEqual(request.POST['phone'], userData.phone)
        self.assertEqual(request.POST['depot'], userData.depot)
    
    
    def test_registration_save_admin_perssion(self):
        pass
    
    
    '''
    def test_home_page_can_save_a_POST_request(self):
        request = HttpRequest()
        request.method = 'POST'
        request.POST['itemText'] = '新的項目'
        
        homePage(request)
        
        self.assertEqual(Item.objects.count(), 1)
        newItem = Item.objects.first()
        self.assertEqual(newItem.text, '新的項目')
        

    def test_home_page_redirect_after_POST(self):
        request = HttpRequest()
        request.method = 'POST'
        request.POST['itemText'] = '新的項目'
        
        response = homePage(request)
        
        self.assertEqual(response.status_code, 302)
        self.assertEqual(response['location'], '/lists/the-only-list-in-the-world/')
        
        
    def test_homePage_only_saves_items_when_necessary(self):
        request = HttpRequest()
        homePage(request)
        self.assertEqual(Item.objects.count(), 0)


class ItemModelTest(TestCase):
    
    def test_saving_and_retrieving_items(self):
        firstItem = Item()
        firstItem.text = '第一個清單項目'
        firstItem.save()
        
        secondItem = Item()
        secondItem.text = '第二個清單項目'
        secondItem.save()
        
        savedItems = Item.objects.all()
        self.assertEqual(savedItems.count(), 2)
        
        firstSavedItem = savedItems[0]
        secondSavedItem = savedItems[1]
        self.assertEqual(firstSavedItem.text, '第一個清單項目')
        self.assertEqual(secondSavedItem.text, '第二個清單項目')


class ListViewTest(TestCase):
    
    def test_displays_all_items(self):
        Item.objects.create(text='itemey 1')
        Item.objects.create(text='itemey 2')
        response = self.client.get('/lists/the-only-list-in-the-world/')
        self.assertContains(response, 'itemey 1')
        self.assertContains(response, 'itemey 2')
'''
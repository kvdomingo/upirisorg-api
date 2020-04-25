from django.conf import settings
from django.test import TestCase, LiveServerTestCase
from django.contrib.staticfiles.testing import StaticLiveServerTestCase
from selenium.webdriver.firefox.webdriver import WebDriver
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.support.ui import Select
from percy import percySnapshot


PERCY_BS_WIDTHS = [576, 768, 992, 1200]

class WebTestCase(StaticLiveServerTestCase):
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        if settings.ON_CI:
            options = Options()
            options.headless = True
            cls.selenium = WebDriver(options=options)
        else:
            cls.selenium = WebDriver()
        cls.selenium.implicitly_wait(10)

    @classmethod
    def tearDownClass(cls):
        cls.selenium.quit()
        super().tearDownClass()

    def test_landing_view(self):
        self.selenium.get(self.live_server_url)
        percySnapshot(browser=self.selenium, name='homepage', widths=PERCY_BS_WIDTHS)

    def test_about_view(self):
        self.selenium.get(f'{self.live_server_url}/about')
        percySnapshot(browser=self.selenium, name='about', widths=PERCY_BS_WIDTHS)

    def test_alumni_view(self):
        self.selenium.get(f'{self.live_server_url}/alumni')
        self.selenium.implicitly_wait(1.5)
        percySnapshot(browser=self.selenium, name='alumni', widths=PERCY_BS_WIDTHS)

    def test_gallery_view(self):
        self.selenium.get(f'{self.live_server_url}/gallery')
        self.selenium.implicitly_wait(1.5)
        percySnapshot(browser=self.selenium, name='gallery', widths=PERCY_BS_WIDTHS)

    def test_contact_view(self):
        self.selenium.get(f'{self.live_server_url}/contact')
        self.selenium.implicitly_wait(1.5)
        percySnapshot(browser=self.selenium, name='contact', widths=PERCY_BS_WIDTHS)

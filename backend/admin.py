from django.contrib import admin
from .models import Member
from django.urls import reverse


class MemberAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'slug', 'committee', 'personal_email', 'up_email')
    search_fields = ('first_name', 'last_name')
    prepopulated_fields = {'slug': ['first_name', 'last_name']}

    def view_on_site(self, obj):
        return reverse('member', args=(obj.slug,))


admin.site.index_title = 'Admin'
admin.site.site_title = 'UP Iris Photography'
admin.site.site_header = 'UP Iris Photography administration'
admin.site.register(Member, MemberAdmin)

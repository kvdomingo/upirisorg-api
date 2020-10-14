from django.db import models


class Member(models.Model):
    COLLEGE_CHOICES = [
        ('CAL', 'College of Arts and Letters'),
        ('CFA', 'College of Fine Arts'),
        ('CHK', 'College of Human Kinetics'),
        ('CMC', 'College of Mass Communication'),
        ('AIT', 'Asian Institute of Tourism'),
        ('CBA', 'College of Business Administration'),
        ('ECON', 'School of Economics'),
        ('SOLAIR', 'School of Labor and Industrial Relations'),
        ('NCPAG', 'National College of Public Administration and Governance'),
        ('ASP', 'Archaeological Studies Program'),
        ('ARKI', 'College of Architecture'),
        ('ENGG', 'College of Engineering'),
        ('CHE', 'College of Home Economics'),
        ('CS', 'College of Science'),
        ('SLIS', 'School of Library and Information Studies'),
        ('STAT', 'School of Statistics'),
        ('AC', 'Asian Center'),
        ('EDUK', 'College of Education'),
        ('IIS', 'Institute of Islamic Studies'),
        ('LAW', 'College of Law'),
        ('CSSP', 'College of Social Sciences and Philosophy'),
        ('CSWCD', 'College of Social Work and Child Development'),
        ('UPOU', 'UP Open University'),
        ('O', 'Other'),
    ]

    COMMITTEE_CHOICES = [
        ('X', 'Executive'),
        ('E', 'Externals'),
        ('I', 'Internals'),
        ('P', 'Promos'),
        ('L', 'Logistics'),
        ('F', 'Finance'),
        ('A', 'Alumni'),
    ]

    EC_CHOICES = [
        ('', ''),
        ('PRE', 'President'),
        ('VPE', 'Vice President for External Affairs'),
        ('VPI', 'Vice President for Internal Affairs'),
        ('SG', 'Secretary-General'),
        ('EOP', 'Executive Officer for Promotions and Documentation'),
        ('EOL', 'Executive Officer for Logistics'),
        ('CE', 'Chancellor of the Exchequer'),
    ]

    first_name = models.CharField(max_length=64)
    middle_name = models.CharField(max_length=64, blank=True)
    last_name = models.CharField(max_length=64)
    slug = models.SlugField(max_length=256, unique=True)
    personal_email = models.EmailField()
    up_email = models.EmailField(blank=True)
    contact_number = models.BigIntegerField(blank=True, null=True)
    college = models.CharField(choices=COLLEGE_CHOICES, max_length=8)
    year = models.SmallIntegerField(blank=True, null=True)
    course = models.CharField(max_length=255, blank=True)
    birthday = models.DateField(blank=True, null=True)
    photography_field = models.CharField(max_length=256, blank=True)
    facebook = models.CharField(max_length=64, blank=True, verbose_name='Facebook username')
    twitter = models.CharField(max_length=64, blank=True, verbose_name='Twitter username (without @)')
    instagram = models.CharField(max_length=64, blank=True, verbose_name='Instagram username (without @)')
    website = models.CharField(max_length=256, blank=True)
    picture_url = models.CharField(max_length=255)
    committee = models.CharField(max_length=1, choices=COMMITTEE_CHOICES)
    executive_committee_position = models.CharField(max_length=3, choices=EC_CHOICES, blank=True)

    @property
    def full_name(self):
        return f'{self.first_name} {self.last_name}'

    def __str__(self):
        if self.up_email != '':
            return f'{self.last_name}, {self.first_name} ({self.up_email})'
        elif self.personal_email != '':
            return f'{self.last_name}, {self.first_name} ({self.personal_email})'
        else:
            return f'{self.last_name}, {self.first_name}'

    class Meta:
        ordering = ['-committee', 'last_name', 'first_name']

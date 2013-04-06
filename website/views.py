from django.http import HttpResponseRedirect, HttpResponse
from django.template import RequestContext, Context, loader
from django.shortcuts import get_object_or_404, render_to_response

# import the models
from models import ReplyEmail, User

def splash_page(request):
    return render_to_response('index.html', {}, context_instance=RequestContext(request))
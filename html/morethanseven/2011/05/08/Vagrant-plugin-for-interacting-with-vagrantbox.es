<p>After <a href="http://www.jedi.be/blog">Patrick</a> released <a href="https://github.com/jedi4ever/sahara/">Sahara</a>, a nifty extension for the <a href="http://vagrantup.com">Vagrant</a> command line tool I&#8217;ve been meaning to put together a similar extension to interacting with the growing list of base boxes on <a href="http://www.vagrantbox.es">vagrantbox.es</a>.</p>
<p>I&#8217;ve just pushed out an initial release of the <a href="https://rubygems.org/gems/vagrantboxes">vagrantboxes gem</a> and you can find the <a href="https://github.com/garethr/ruby-vagrantboxes">source code and some documentation on GitHub</a>.</p>
<p>The extensions adds a vagrantboxes namespace to the vagrant command line tool which provides a few useful commands. Specifically you can list all the available boxes, do text searches, show the full details of a box and most handily of all add a box that takes your fancy to your local base box store, all without having to worry about the URLs of the boxes if you don&#8217;t want to.</p>
<p>Here&#8217;s an example of a simple search:</p>
<pre>vagrant vagrantboxes search centos
3    centos 5.5                http://dl.dropbox.com/u/15307300/vagrant-0.7-centos-64-base.box
6    opscode centos 5          http://opscode-vagrant-boxes.s3.amazonaws.com/centos5-gems.box
7    opscode ubuntu 10.04      http://opscode-vagrant-boxes.s3.amazonaws.com/ubuntu10.04-gems.box
9    puppet centos 5.5 64      http://puppetlabs.s3.amazonaws.com/pub/centos5_64.box
10   puppet centos 4 64        http://puppetlabs.s3.amazonaws.com/pub/centos4_64.box
21   centos 5.6 32             http://yum.mnxsolutions.com/vagrant/centos_56_32.box</pre>
<p>And another quick example, this time of show printing the full description. In the future I might look to store more structured metadata and make this more useful.</p>
<pre>vagrant vagrantboxes show 18
puppet debian lenny 64
http://puppetlabs.s3.amazonaws.com/pub/debian_lenny_64.box

Debian Lucid 64 bit vagrant box. Puppet 2.6.6 installed and ready to provision using the Puppet provisioner in Vagrant.

For good sample modules, try the jeffmccune-motd and jeffmccune-mockbuild modules posted to http://forge.puppetlabs.com/

Created by Ken Barber, ken@puppetlabs.com</pre>
<p>This proved a good excuse to delve into the Vagrant source code which is pretty readable for the most part once you understand the libraries it&#8217;s build upon. It&#8217;s simple enough to extend for adding commands like this too, which bodes well for other more useful additions in the future.</p>
<p>If anyone has any problems with this extensions do let me know. Error handling currently consists of returning blank output rather than sensible error codes, and as I&#8217;ve yet to add a small test suite their might be a few bugs lying around. I&#8217;ll try and make it better behaved in the next week or two but reasoned it&#8217;s useful straight away.</p>
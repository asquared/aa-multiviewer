# aa-multiviewer
Really simple multiviewer for IP cameras with MJPEG streams (e.g. AXIS)

# Installation
* `git clone git://github.com/asquared/aa-multiviewer.git`
* Dependencies are managed with npm. To pull them in:
  `cd aa-multiviewer; npm install`.
* Put the whole directory structure somewhere accessible to your web server.
* The configuration is defined in index.html, so you'll want to edit it.
  Create a `<div>` for each camera following the examples given. Edit the
  `data-url` attribute to point to the video stream from the camera and
  use the `data-name` attribute to give the camera a descriptive name.
* Parameters (appended to all camera URLs) can be set in the
  `data-common-args` and `data-common-onclick-args` attributes of the
  `cameraContainer`.
* `data-common-args` is used to build the URLs for the multiview boxes.
* `data-common-onclick-args` is used to build the URLs when a box is clicked
  to access the full-size view.

# Authentication via Reverse Proxy
You can avoid the need to authenticate to each camera individually by setting
up your web server to reverse-proxy the cameras. Notice the relative URLs in
the example config in index.html? Those are reverse-proxied to the actual
cameras by an apache config like the following:

	<Location /multiviewer/truckshop1>
		ProxyPass http://172.19.200.81/
		ProxyPassReverse http://172.19.200.81/
		RequestHeader set Authorization "Basic xxxxxxxxxxxxx="
	</Location>

The string used in the `Authorization` header can be obtained by running
`echo -en 'username:password' | base64`. (note that the plaintext password
can be easily obtained again from this string, so you may wish to take other
measures to prevent unauthorized access to the apache config file).

# License
MIT. See license.txt.

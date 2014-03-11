import csv
import urllib2
import StringIO
import os

# site = '06674500' 	# State Line Gauge
# site = '06764880'  	# Roscoe
# site = '06775500'  	# Dunning
# site = '06785000'  	# Saint Paul
# site = '06768000'  		# Overton
# site = '06770200'  	# Kearney
# site = '06770500'  	# Grand Island
# site = '06796000'  	# North Bend
# site = '06805500'  	# Louisville

sites = ['06674500','06764880','06775500','06785000','06768000','06770200','06770500','06796000','06805500']


for i in range(0,len(sites)):
	# Open webpage and read data
	url = 'http://waterdata.usgs.gov/ne/nwis/dv?cb_00060=on&format=rdb&period=&begin_date=2013-01-01&end_date=2013-12-31&site_no=' + sites[i] + '&referred_module=sw'
	print url
	page = urllib2.urlopen(url)
	reader = csv.reader(page, dialect='excel-tab')

	# Check for subdirectory and/or make subdirectory
	path = "data/tsv"
	if not os.path.exists(path):
		os.makedirs(path)
	
	# Create file and write data
	filename = "sample-data-" + sites[i] + ".tsv"
	file = open(os.path.join(path, filename), "wb")
	writer = csv.writer(file, delimiter='\t')
	for row in reader:
		writer.writerow(row)
	
	# Close file
	file.close()
			
print ".... done!!"

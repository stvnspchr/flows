import csv
import urllib2
import StringIO
import os


# Open webpage and read data
url = 'http://waterdata.usgs.gov/ne/nwis/dv?cb_00060=on&format=rdb&period=&begin_date=2013-01-01&end_date=2013-12-31&site_no=06768000&referred_module=sw'
page = urllib2.urlopen(url)
reader = csv.reader(page, dialect='excel-tab')

for row in reader:
	print row

# Check for subdirectory and/or make subdirectory
# path = "data"
# if not os.path.exists(path):
# 	os.makedirs(path)
	
# Create file and write data
# filename = "weather-data-" + str(m) + '-' + str(d) + ".tsv"
# file = open(os.path.join(path, filename), "wb")
# cw = csv.writer(file, delimiter='\t')
# print "writing file of " + str(m) + '/' + str(d)
# for row in cr:
# 	cw.writerow(row)
# 	
# Close file
# print str(m) + '/' + str(d) + " file closed"
# file.close()
			
print ".... done!!"

import imageio.v3 as iio
filenames = ['s1.jpg', 's2.jpg', 's3.jpg', 's4.jpg', 's5.jpg']
images = [ ]
for filename in filenames:
  images.append(iio.imread(filename))
iio.imwrite('sawako.gif', images, duration = 150, loop = 0)
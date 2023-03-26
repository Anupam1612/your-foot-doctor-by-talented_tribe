from cProfile import label
from tokenize import Triple
from unittest import result
from ultralytics import YOLO
import pandas as pd
from PIL import Image
import numpy as np
import matplotlib.pyplot as plt
import cv2

model = YOLO("yolo_feet_1.pt","v8")
source = "aug12.jpg"
result = model.predict(source= source,save=True)

print(result)
a=result[0].boxes.boxes
    # apply the cv2.transform to perform matrix transformation
#     # image = cv2.transform(image, m, None)
#     # print(image)
px=pd.DataFrame(a).astype("float")
px.sort_values(by=[4])
print(px)

w= px.iloc[0,:].to_numpy()
print(w)
k = (w[0],w[1],w[2],w[3])
# # print(W[1])
im = Image.open("aug12.jpg")
im2 = im.crop(k)
# im2.show()
img_feet_gray = im2.convert("L")
# img_feet_gray.show()
threshold = 100
img_feet_threshold = img_feet_gray.point(lambda x: 255 if x > threshold else 0)
# img_feet_threshold.show()
img_feet_threshold.save("check.png")
# print(img_feet_threshold)
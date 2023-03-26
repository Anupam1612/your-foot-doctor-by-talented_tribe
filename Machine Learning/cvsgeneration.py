# import os
# import pandas as pd
# f_folder =r"datasetforresnet\Test\Flat_test"
# h_folder =r"datasetforresnet\Test\High_test"
# n_folder =r"datasetforresnet\Test\Normal_test"

# df = pd.DataFrame(columns=['Count','Image_Path','Target'])
# count = 0
# for file_name in os.listdir(f_folder):
#         source = os.path.join(f_folder,file_name)
#         new_row = {'Count':count, 'Image_Path':source, 'Target':0}
#         df = df.append(new_row, ignore_index=True)
#         count +=1
# for file_name in os.listdir(n_folder):
#         source = os.path.join(n_folder,file_name)
#         new_row = {'Count':count, 'Image_Path':source, 'Target':1}
#         df = df.append(new_row, ignore_index=True)
#         count +=1
# for file_name in os.listdir(h_folder):
#         source = os.path.join(h_folder,file_name)
#         new_row = {'Count':count, 'Image_Path':source, 'Target':2}
#         df = df.append(new_row, ignore_index=True)
#         count +=1

# # for i in df.iloc[:,1]:
# #         i = i.replace('FLAT\\','FLAT/')


import os
import pandas as pd

f_folder = r"dataset\FLAT"
h_folder = r"dataset\HIGH"
n_folder = r"dataset\NORMAL"

data = []

count = 0
for file_name in os.listdir(f_folder):
    source = os.path.join(f_folder, file_name)
    data.append({'Count': count, 'Image_Path': source, 'Target': 0})
    count += 1

for file_name in os.listdir(n_folder):
    source = os.path.join(n_folder, file_name)
    data.append({'Count': count, 'Image_Path': source, 'Target': 1})
    count += 1

for file_name in os.listdir(h_folder):
    source = os.path.join(h_folder, file_name)
    data.append({'Count': count, 'Image_Path': source, 'Target': 2})
    count += 1

df = pd.DataFrame(data, columns=['Count', 'Image_Path', 'Target'])

df.to_csv('image_data.csv', index=False) # save DataFrame to CSV file

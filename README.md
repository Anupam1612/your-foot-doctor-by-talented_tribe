# your-foot-doctor-by-talented_tribe

HELLO EVERYONE, 

We are Talented_Tribe

VISIT OUR WEBSITE AT :  https://your-foot-doctor-97589.web.app/

Problem Statement: 
Develop a model that can accurately classify any image of a foot into three categories:
low arch type/flat foot, normal arch, and high arch type.

Objective:
This problem statement is essential because identifying the arch type of a foot
is crucial for preventing foot-related injuries, improving athletic performance,
and selecting the right footwear. However, manually analyzing the arch type of
a foot is a time-consuming and error-prone task. Therefore, an AI-based
solution that can automate this process would be extremely beneficial.

Key Features:

Arch Type Classfication-The model should classify the arch type/flat foot,normal arch, and high arch type.

User Interface - The model should be integradted into a user-friendly web application that allows clients to uplode their pictures and receive the arch type.

Solution Approch: 

we diveded problem into three parts.

---Artificial Inteligence and Machine Learning 
---Frontend Developement
---Backend Developement

1) Artificial Inteligence and Machine Learning 

First We started with Data Preprocessing, so in data preprocessing first we divide data into three parts test, train, and validation as respective owner gave as required image dataset but somehow it needed to preprocess
so for labeling we use online website 'https://app.roboflow.com/' using this we are labeling our dataset for generating matrix for each images after that we are using Transfer learning Algorithm know as YOLO. using YOLO 
we are try to detect actually in which lag the FLatness is there! then after that we train our model usign yolo and get best.pt file then we can use this best.pt file in furture code after that we are try to crop that detected 
bject so for that we are using just simple liberary aslo know as Tensorflow, pandas, keras etc.. after sucessfully crop image we try for calculating height of flatness present in Lag so for that we are use python liberary
but we dont get as much accuracy so we implement dense Convoluation Neural network using torch liberay. using this we are able to classify our imagedata set.

2) Frontend development 

Here we are implemented our website using HTML, CSS, and javascript and additional UI/UX uisng Figma open source toolkit also for database we are using Firebase.
Website is already deployed you can visit our website as mention above. 

3) Backend Developement 

so basically for connecting Our Machine learing Model using .pkl file in our Back-end, for that we are using Flask Python liberary. but we are faceing difficulties over here we can't be able to connect our Machine Learning Model to our Back-end. And still we are working on connecting our Machine Learning model to Our Frontend and Backend.


And all the machine learning related files you can find in Folder where all model files are there and also Frontend and backend related files are also there. Image Dataset is in Dataset Folder as well.



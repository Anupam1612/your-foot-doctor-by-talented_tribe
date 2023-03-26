# Import necessary libraries
import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.applications.resnet50 import ResNet50
from tensorflow.keras.layers import Dense, Flatten, Dropout
from tensorflow.keras.models import Sequential

# Define directories for the dataset
train_dir = "meargedataset"
val_dir = "datasetforresnet\Test\Flat_test"

# Define batch size and image size
batch_size = 32
img_height = 224
img_width = 224

# Define data augmentation for the dataset
train_datagen = ImageDataGenerator(
    rescale=1./255,
    shear_range=0.2,
    zoom_range=0.2,
    horizontal_flip=True)

val_datagen = ImageDataGenerator(rescale=1./255)

# Load the dataset using flow_from_directory
train_data = train_datagen.flow_from_directory(
    train_dir,
    target_size=(img_height, img_width),
    batch_size=batch_size,
    class_mode='categorical')

val_data = val_datagen.flow_from_directory(
    val_dir,
    target_size=(img_height, img_width),
    batch_size=batch_size,
    class_mode='categorical')

# Define the ResNet model
resnet = ResNet50(weights='imagenet', include_top=False, input_shape=(img_height, img_width, 3))

# Freeze the weights of the model
for layer in resnet.layers:
    layer.trainable = False

# Add classification layers on top of the model
model = Sequential([
    resnet,
    Flatten(),
    Dense(512, activation='relu'),
    Dropout(0.5),
    Dense(3, activation='softmax')
])

# Compile the model
model.compile(optimizer='adam',
              loss='categorical_crossentropy',
              metrics=['accuracy'])

# Train the model
history = model.fit(
    train_data,
    epochs=10,
    validation_data=val_data
)

# Evaluate the model on the validation set
val_loss, val_acc = model.evaluate(val_data)
print("Validation accuracy:", val_acc)

# Save the model
model.save("resnet_model.h5")

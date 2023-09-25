# Function to create and display the Tkinter GUI
def browse_and_save_image():
  file_path = filedialog.askopenfilename(filetypes=[("Image Files", "*.jpg *.jpeg *.png *.gif")])

  if file_path:
    image_title = os.path.basename(file_path)
    image_title_label.config(text=f"Image: {image_title}")
    save_folder = "images"
    save_path = os.path.join(save_folder, image_title)
    os.rename(file_path, save_path)
    return image_title

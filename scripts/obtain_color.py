from PIL import Image

def rgb_to_int(rgb):
    return int('{:02x}{:02x}{:02x}'.format(rgb[0], rgb[1], rgb[2]), 16)

def get_pixel_colors_with_coordinates(image_path):
    image = Image.open(image_path)

    width, height = image.size

    pixel_colors_with_coordinates = []

    for y in range(height):
        for x in range(width):
            pixel = image.getpixel((x, y))
            color_int = rgb_to_int(pixel)
            pixel_data = [color_int, x, y]
            pixel_colors_with_coordinates.append(pixel_data)

    return pixel_colors_with_coordinates

image_path = "../image.jpeg"  # replace with the path to your image file
pixel_data_array = get_pixel_colors_with_coordinates(image_path)

print(pixel_data_array)

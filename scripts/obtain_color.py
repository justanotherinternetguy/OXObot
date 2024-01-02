from PIL import Image

def rgb_to_hex(rgb):
    # Convert RGB tuple to hexadecimal color value
    return "#{:02x}{:02x}{:02x}".format(rgb[0], rgb[1], rgb[2])

def get_pixel_colors_with_coordinates(image_path):
    # Open the image
    image = Image.open(image_path)

    # Get the size of the image
    width, height = image.size

    # Get the pixel colors and coordinates in a 2D array
    pixel_colors_with_coordinates = []

    for y in range(height):
        for x in range(width):
            pixel = image.getpixel((x, y))
            hex_color = rgb_to_hex(pixel)
            pixel_data = [hex_color, x, y]
            pixel_colors_with_coordinates.append(pixel_data)

    return pixel_colors_with_coordinates

# Example usage
image_path = "../backup.png"  # Replace with the path to your image file
pixel_data_array = get_pixel_colors_with_coordinates(image_path)

# Now pixel_data_array contains a 2D array where each subarray has the hex color, x, and y coordinates
print(pixel_data_array)

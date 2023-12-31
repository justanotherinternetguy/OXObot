def cursor_to_coords(tile_x, tile_y, char_x, char_y):
    return [tile_x * 16 + char_x, tile_y * 8 + char_y]

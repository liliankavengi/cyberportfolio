import os

css_path = 'static/style.css'
with open(css_path, 'r') as f:
    css = f.read()

# Replace variables
css = css.replace('--bg-color: #0d0d12;', '--bg-color: #242323;')
css = css.replace('--bg-secondary: #14141c;', '--bg-secondary: #363636;')
css = css.replace('--text-primary: #e2e8f0;', '--text-primary: #AEA7A3;')
css = css.replace('--text-secondary: #94a3b8;', '--text-secondary: #959595;')
css = css.replace('--neon-blue: #00f0ff;', '--neon-blue: #795238;')
css = css.replace('--neon-purple: #b026ff;', '--neon-purple: #525254;')
css = css.replace('--neon-pink: #ff0055;', '--neon-pink: #525254;')
css = css.replace('--neon-green: #00ff66;', '--neon-green: #959595;')
css = css.replace('--terminal-bg: #050508;', '--terminal-bg: #363636;')

# Replace hardcoded RGBA
css = css.replace('rgba(20, 20, 28, 0.6)', 'rgba(54, 54, 54, 0.8)')
css = css.replace('rgba(0, 240, 255', 'rgba(121, 82, 56')
css = css.replace('rgba(176,38,255', 'rgba(82, 82, 84')
css = css.replace('rgba(13,13,18', 'rgba(36, 35, 35')

# Replace white/grays
css = css.replace('color: #fff;', 'color: #AEA7A3;')
css = css.replace('color: #ccc;', 'color: #AEA7A3;')
css = css.replace('color: #888;', 'color: #959595;')
css = css.replace('background: #1e1e24;', 'background: #242323;')

# Specific utility colors
css = css.replace('color: #5dade2;', 'color: #795238;')
css = css.replace('color: #f4d03f;', 'color: #959595;')

with open(css_path, 'w') as f:
    f.write(css)

print("Applied color palette to style.css")

import fs from 'fs'

fs.copyFileSync('./src/data/data.json', './dist/data.json')
fs.copyFileSync('./src/resources/information.html', './dist/locks/information.html')
fs.copyFileSync('./src/data/glossary.json', './dist/glossary.json')

fs.copyFileSync('./src/data/dials.json', './dist/dials.json')
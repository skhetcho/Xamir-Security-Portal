FROM kalilinux/kali-rolling

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./
COPY . .
RUN ["chmod", "+x", "/usr/src/app/install.sh"]
RUN ./install.sh

RUN npm install



EXPOSE 3000

CMD ["node", "index.js"]
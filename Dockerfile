# node.js 압축 이미지를 설치합니다
FROM node:18.1.0-alpine

# 이미지 내부 작업 경로를 설정합니다
WORKDIR /app

COPY package.json .
COPY package-lock.json .

# 필수 패키지 파일을 이미지 내부로 복사하고, npm 명령어로 설치합니다
COPY package.json ./app
RUN npm install

COPY . .

EXPOSE 3000

# 앱 시작 명령어를 시작합니다.
ENTRYPOINT ["npm", "run", "dev"]
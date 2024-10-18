FROM node:18.14.2-alpine3.17
 
# 创建app目录
RUN mkdir -p /usr/src/node-app/server
# 设置工作目录
WORKDIR /usr/src/node-app/server
 
COPY . /usr/src/node-app/server
 
RUN npm i   
# 暴露容器端口
EXPOSE 8084
 
CMD npm run start
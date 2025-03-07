import { Injectable } from '@nestjs/common';


export class AppService {
  getDoSomething(input : number) : string {
    // @ts-ignore
    return input;
  }
}

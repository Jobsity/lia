import { Injectable } from '@angular/core';

export interface ILia {
  id: number,
  candidate_id: number,
  candidate_name: string,
  title: string,
  description: string,
  short_description: string,
  time: number,
  language: string,
  submitted_code: string,
  snippet_code: string,
  state: string,
  created_at?: string,
  started_at?: string,
  submitted_at?: string
}

@Injectable()
export class Lia implements ILia {
  public id: number;
  public candidate_id: number;
  public candidate_name: string;
  public title: string;
  public description: string;
  public short_description: string;
  public time: number;
  public language: string;
  public submitted_code: string;
  public snippet_code: string;
  public state: string;
  public created_at: string;
  public started_at: string;
  public submitted_at: string;

  constructor(fields: any) {
    this.id = fields.id;
    this.candidate_id = fields.candidate_id;
    this.candidate_name = fields.candidate_name;
    this.title = fields.title;
    this.description = fields.description;
    this.short_description = fields.short_description;
    this.time = fields.time;
    this.language = fields.language;
    this.submitted_code = fields.submitted_code;
    this.snippet_code = fields.snippet_code;
    this.state = fields.state;
    this.created_at = fields.created_at;
    this.started_at = fields.started_at;
    this.submitted_at = fields.submitted_at;
  }

  static copy(src: ILia): ILia {
    let copy = {};

    for (let field in src) {
      if (src.hasOwnProperty(field)) {
        copy[field] = src[field];
      }
    }

    return new Lia(copy);
  }
}

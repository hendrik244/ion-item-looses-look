export class WorkerEmployment {
  id: Number;
  category: String;
  period_start: Date;
  period_end: Date;
  description: String;

  constructor(
    $id: Number,
    $category: String,
    $period_start: Date,
    $period_end: Date,
    $description: String
  ) {
    this.id = $id;
    this.category = $category;
    this.period_start = $period_start;
    this.period_end = $period_end;
    this.description = $description;
  }

  static generate(json, id: Number) {
    return new WorkerEmployment(
      id,
      json.category,
      json.period_start,
      json.period_end,
      json.description
    );
  }

  /**
   * Getter $id
   * @return {Number}
   */
  public get $id(): Number {
    return this.id;
  }

  /**
   * Getter $category
   * @return {String}
   */
  public get $category(): String {
    return this.category;
  }

  /**
   * Getter $period_start
   * @return {Date}
   */
  public get $period_start(): Date {
    return this.period_start;
  }

  /**
   * Getter $period_end
   * @return {Date}
   */
  public get $period_end(): Date {
    return this.period_end;
  }

  /**
   * Getter $description
   * @return {String}
   */
  public get $description(): String {
    return this.description;
  }

  /**
   * Setter $id
   * @param {Number} value
   */
  public set $id(value: Number) {
    this.id = value;
  }

  /**
   * Setter $id
   * @param {String} value
   */
  public set $category(value: String) {
    this.category = value;
  }

  /**
   * Setter $period_start
   * @param {Date} value
   */
  public set $period_start(value: Date) {
    this.period_start = value;
  }

  /**
   * Setter $period_end
   * @param {Date} value
   */
  public set $period_end(value: Date) {
    this.period_end = value;
  }

  /**
   * Setter $description
   * @param {String} value
   */
  public set $description(value: String) {
    this.description = value;
  }
}

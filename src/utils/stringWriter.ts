import { Writable } from "stream";

export class StringWriter extends Writable {
  private data: string = "";

  _write(
    chunk: Buffer,
    encoding: string,
    callback: (error?: Error | null) => void
  ) {
    this.data += chunk.toString();
    callback();
  }

  getData() {
    return this.data;
  }
}

import { GlobalWorkerOptions } from "pdfjs-dist";

GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${(window as any).pdfjsVersion}/pdf.worker.min.js`;

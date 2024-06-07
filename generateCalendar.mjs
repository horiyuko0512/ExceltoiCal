import fs from 'fs';
import XLSX from 'xlsx';
import ical from 'ical-generator';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const excelFilePath = path.resolve(__dirname, 'sample-schedule.xlsx');
const myName = 'Satou'

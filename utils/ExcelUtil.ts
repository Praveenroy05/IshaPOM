import path from "path"
import xlsx from "xlsx";

export class ExcelUtil{


   // filePath = path.join(__dirname, '../TestData/excel.xlsx');

    static getExcelData(filePath, sheeetName){
        // path of the file
        // sheet name
        // read the file using xlsx package
        try{
            const workbook =   xlsx.readFile(filePath)
            const sheet = workbook.Sheets[sheeetName]
            const data = xlsx.utils.sheet_to_json(sheet)
            return data;

        }catch(e){
            console.log(e);
        }
    }

}
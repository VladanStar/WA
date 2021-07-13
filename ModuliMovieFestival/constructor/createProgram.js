import {Program} from "../entities/program.js";
import {uListOfCreatedPrograms, selectProgramList, programDate,festival} from '../entities/variables.js';


function createProgram() {
    var newProgram = new Program(programDate.value);
    if(newProgram.date < new Date()) {
       return alert ('error');
    }
    var index = festival.listOfCreatedPrograms.push(newProgram) - 1;
 
    //adding created programs to list
    var liProgram = document.createElement('li');
    liProgram.textContent = newProgram.getData();
    uListOfCreatedPrograms.appendChild(liProgram);
    //adding program to select option in html
    var programOption = document.createElement('option');
    programOption.textContent = newProgram.getData();
    programOption.setAttribute('value', index);
  
    selectProgramList.appendChild(programOption);
    console.log(festival)

}
export default createProgram
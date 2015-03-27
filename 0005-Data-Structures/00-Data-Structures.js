/**
 * Created by davey on 26.03.2015.
 */


// Добавляем данные в журнал

var Journal = [];

function addEntry(events, didTurnIntoSquirrel){
    Journal.push(
        {
            event: events,
            squirrel: didTurnIntoSquirrel
        }
    );
};

//Описываем функцию получения корреляции

function phi(table){

    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2]));
};

console.log(phi([76, 9, 4, 1]));
// → 0.068599434


//Находим корреляцию для конкертного события

    function hasEvent(event, entry){
        return entry.events.indexOf(event) != -1;
    };


    function tableFor(event, journal) {
        var table = [0, 0, 0, 0];
        for(i=0; i < journal.length; i++){
          var entry = journal[i], index = 0;
            if(hasEvent(event, entry)) index += 1;
            if(event.squirrel) index += 2;
            table[index] += 1;
        };
            return table;
    };


console.log(tableFor("pizza", JOURNAL));
// → [76, 9, 4, 1]
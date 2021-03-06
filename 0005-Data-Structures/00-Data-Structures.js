/**
 * Created by davey on 26.03.2015.
 */

//
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
        for(var i = 0; i < journal.length; i++){
            var entry = table[i], index = 0;
            if(hasEvent(event,entry)) index += 1;
            if(journal.squirrel) index += 2;
            table[index] += 1;
        };
        return table;
    };


console.log(tableFor("pizza", JOURNAL));
// → [76, 9, 4, 1]

// Final analysis
function gatherCorrelations(journal) {
        var phis = {};
        for(var entry = 0; entry < journal.length; entry++){
            var events = journal[entry].events;
            for(i=0; i < events.length; i++){
                var event = events[i];
                if(!(event in phis))
                phis[event] = phi(tableFor(event,journal));
            };
        };
        return phis;
};

var correlations = gatherCorrelations(JOURNAL);
console.log(correlations.pizza);
// → 0.068599434


//Находим искомую причину
for(var i = 0; i < JOURNAL; i++){
    var entry = JOURNAL[i]
    if(hasEvent("арахис", entry) &&
    !hasEvent("чистка зубов", entry))
    entry.events.push("арахис зубы")
}
    console.log(phi(tableFor("арахис зубы", JOURNAL)))


//slice and concat

function remove(array, index){
    return array.slice(0, index).concat(array.slice(index+1));
}

console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]

























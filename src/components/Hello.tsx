import {SoundLoader} from "../lib/SoundLoader";
import {Play} from "../lib/Play";
require('./main.css');
import * as React from 'react';

var audioContext = new AudioContext();
var soundLoader = new SoundLoader(audioContext);
var play = new Play(audioContext);

soundLoader.fromUrl('2.mp4').then(ab => play.setAudio(ab));

var subs = `
0:00:01.760,0:00:04.520
River Street

0:00:04.520,0:00:06.010
'Leave him alone!'

0:00:06.010,0:00:07.470
Peter shouted.

0:00:07.470,0:00:08.660
Steve stopped kicking John

0:00:08.660,0:00:09.580
and turned around.

0:00:09.580,0:00:11.090
'Who are you?'

0:00:11.090,0:00:11.990
Steve asked.

0:00:11.990,0:00:12.840
'And what do you want?

0:00:12.840,0:00:13.280
Go away

0:00:13.280,0:00:14.990
and mind your own business.'

0:00:14.990,0:00:15.880
'No,

0:00:15.880,0:00:18.760
I won't mind my own business,'

0:00:18.760,0:00:19.760
said Peter

0:00:19.760,0:00:21.070
and hit Steve hard,

0:00:21.070,0:00:21.740
knocking him back

0:00:21.740,0:00:23.570
against the wall.

0:00:23.570,0:00:24.380
John, seeing

0:00:24.380,0:00:25.360
that the others were watching

0:00:25.360,0:00:26.779
Steve and Peter fight,

0:00:26.779,0:00:27.210
jumped up

0:00:27.210,0:00:28.430
and started to run.

0:00:28.430,0:00:29.630
'This way,'

0:00:29.630,0:00:30.380
shouted Peter.

0:00:30.380,0:00:32.070
'Get into the car.'

0:00:32.070,0:00:32.689
John ran over

0:00:32.689,0:00:33.850
to the big black car

0:00:33.850,0:00:34.519
which was standing

0:00:34.519,0:00:36.069
by the pavement.

0:00:36.069,0:00:37.309
As John got in,

0:00:37.309,0:00:37.920
he looked back

0:00:37.920,0:00:38.210
to see

0:00:38.210,0:00:40.639
that Peter had beaten Steve.

0:00:40.639,0:00:41.350
Steve and his friends

0:00:41.350,0:00:42.819
were running away.

0:00:42.819,0:00:44.170
'How did you know

0:00:44.170,0:00:45.469
I was here?'

0:00:45.469,0:00:46.190
John asked Peter

0:00:46.190,0:00:47.789
when he got into the car.

0:00:47.789,0:00:51.889
'We'll talk about it later,' said Peter.

0:00:51.889,0:00:52.460
John and Peter

0:00:52.460,0:00:53.760
sat in silence

0:00:53.760,0:00:54.499
until the car

0:00:54.499,0:00:57.190
stopped beside Peter's lorry.

0:00:57.190,0:00:58.499
Peter thanked the driver

0:00:58.499,0:00:59.499
and both Peter and John

0:00:59.499,0:01:00.420
got into the lorry.`;

var subs = `
00:0:1.76,00:0:4.51
River Street

00:0:4.51,00:0:5.70
'Leave him alone!'

00:0:5.51,00:0:6.67
Peter shouted.

00:0:7.27,00:0:8.66
Steve stopped kicking John

00:0:8.56,00:0:9.58
and turned around.

00:0:9.58,00:0:10.78
'Who are you?'

00:0:11.08,00:0:11.89
Steve asked.

00:0:11.79,00:0:12.74
'And what do you want?

00:0:12.83,00:0:13.58
Go away

00:0:13.57,00:0:14.98
and mind your own business.'

00:0:15.58,00:0:16.17
'No,

00:0:16.28,00:0:18.76
I won't mind my own business,'

00:0:18.76,00:0:19.56
said Peter

00:0:19.76,00:0:21.07
and hit Steve hard,

00:0:21.07,00:0:21.73
knocking him back

00:0:21.73,00:0:22.87
against the wall.

00:0:23.26,00:0:24.37
John, seeing

00:0:24.37,00:0:25.35
that the others were watching

00:0:25.35,00:0:26.77
Steve and Peter fight,

00:0:26.67,00:0:27.21
jumped up

00:0:27.21,00:0:28.32
and started to run.

00:0:28.42,00:0:29.42
'This way,'

00:0:29.62,00:0:30.37
shouted Peter.

00:0:30.37,00:0:31.87
'Get into the car.'

00:0:32.07,00:0:32.68
John ran over

00:0:32.68,00:0:33.85
to the big black car

00:0:33.85,00:0:34.51
which was standing

00:0:34.51,00:0:35.26
by the pavement.

00:0:36.06,00:0:37.10
As John got in,

00:0:37.30,00:0:37.92
he looked back

00:0:37.92,00:0:38.21
to see

00:0:38.31,00:0:40.33
that Peter had beaten Steve.

00:0:40.33,00:0:41.34
Steve and his friends

00:0:41.35,00:0:42.81
were running away.

00:0:43.41,00:0:44.17
'How did you know

00:0:44.17,00:0:45.46
I was here?'

00:0:45.46,00:0:46.18
John asked Peter

00:0:46.18,00:0:47.78
when he got into the car.

00:0:47.78,00:0:51.88
'We'll talk about it later,' said Peter.

00:0:51.88,00:0:52.46
John and Peter

00:0:52.56,00:0:53.75
sat in silence

00:0:53.75,00:0:54.49
until the car

00:0:54.49,00:0:57.18
stopped beside Peter's lorry.

00:0:56.88,00:0:58.29
Peter thanked the driver

00:0:58.49,00:0:59.49
and both Peter and John

00:0:59.59,00:1:0.42
got into the lorry.
`;


class Word {
    constructor(public start:number, public dur:number, public text:string) {

    }
}

var words2 = subs.trim().split(/\n\n/).map(w => {
    var res = w.trim().match(/(\d+):(\d+):(\d+)\.(\d+),(\d+):(\d+):(\d+)\.(\d+)\n(.*?)$/);
    var start = +res[1] * 3600 + +res[2] * 60 + +res[3] + +res[4] / 100;
    var end = +res[5] * 3600 + +res[6] * 60 + +res[7] + +res[8] / 100;
    var text = res[9];
    return new Word(start, end - start, text);
});
console.log(words2);

//var words = wordsStr.trim().split(/\n/).map(w => w.trim());

class WordStep extends React.Component<{},{}> {
    index = 0;
    size = 4;

    getCurrWord() {
        return words2[this.index];
    }

    componentDidMount() {
        document.addEventListener('keydown', e => {
            console.log(e.keyCode);
            var step = 0.1;
            var playTime = 1;

            //left up
            var currWord = this.getCurrWord();
            if (e.keyCode == 219) {
                currWord.start += step;
                currWord.dur -= step;
                play.play(currWord.start, currWord.dur);
            }

            //left down
            if (e.keyCode == 222) {
                currWord.start -= step;
                currWord.dur += step;
                play.play(currWord.start, currWord.dur);
            }

            //right up
            if (e.keyCode == 221) {
                currWord.dur += step;
                play.play(currWord.start, currWord.dur);
            }

            //right down
            if (e.keyCode == 220) {
                currWord.dur -= step;
                play.play(currWord.start, currWord.dur);
            }

            //enter
            if (e.keyCode == 13) {
                if (this.index < words2.length - 1) {
                    this.index++;
                    this.forceUpdate();
                    var currWord = words2[this.index];
                    play.play(currWord.start, currWord.dur);
                }
            }

            //space
            if (e.keyCode == 32) {
                var currWord = words2[this.index];
                play.play(currWord.start, currWord.dur);
            }
            // back and down
            if (e.keyCode == 8 || e.keyCode == 40) {
                if (this.index > 0) {
                    this.index--;
                    var currWord = words2[this.index];
                    play.play(currWord.start, currWord.dur);
                    this.forceUpdate();
                }
            }
        });
    }

    render() {
        var w = [...words2, null, null, null].slice(this.index, this.index + this.size);
        console.log(w);

        w.reverse();
        return <div className="word-step">
            {w.map((word, i) => <div className={'w w'+i}>{word ? word.text : '\u00A0'}</div>)}
        </div>
    }
}
React.render(<WordStep/>, document.body);

//var d = d=>'00:'+(d/60 | 0) + ':' + (d % 60 | 0) + '.' + (d - (d|0)).toString().substr(2,2); words2.map(w => d(w.start)+','+d(w.start+w.dur)+'\n'+w.text).join("\n\n")
const titleContainer = document.querySelector(".title-container");
const titleBtn = document.querySelector("#startBtn");
const questionContainer = document.querySelector('.question-container');
const question = document.querySelector('#question');
const type = document.querySelector('#type');
const aBtn = document.querySelector("#a");
const bBtn = document.querySelector('#b');
const EI = document.querySelector('#EI');
const SN = document.querySelector('#SN');
const TF = document.querySelector("#TF");
const JS = document.querySelector("#JP");
//const pro = document.querySelector('.progress-bar');
const mbti = document.querySelector('#MBTI');
const explain = document.querySelector('#explain');
const image = document.querySelector('#result-img');
const resultContainer = document.querySelector('.result-container');
const progress = document.querySelector('#progress');


const q = {
    1: {
        "title": "약속 당일, 날씨가 좋지 않다. 당신의 선택은?", 
        "type": "EI", 
        "A": "실내에서 할 수 있는 활동을 찾아본다.", 
        "B": "날씨가 좋지 않으니 약속을 미룬다."
    },
    2: {"title": "친구가 자신의 친구를 말도 없이 데리고 왔다. 그때 나는?", 
    "type": "EI", 
    "A": "같이 놀아도 상관없다. 새로운 친구를 사겨서 좋다.", 
    "B": "어색해서 싫은데 어쩔 수 없으니 같이 논다."},
    3: {"title": "음식점에 갔는데, 호출벨이 없다. 주문을 어떻게 하지?", "type": "EI", 
    "A": "큰소리로 '사장님~!'을 외쳐서 음식을 주문한다. ", "B": "직원에게 무한 눈빛신호를 보내고 눈이 마주칠때까지 기다린다."},
    4: {"title": "집에 있는데, 천둥번개가 우당탕 친다. 당신의 생각은?", "type": "SN", 
    "A": "천둥번개 소리를 asmr삼아서 낮잠을 잔다.", "B": "이러다가 우리집에 번개맞으면 어떡하지? 초능력이 생기려나? 등등의 상상을 한다."},
    5: {"title": "비오는날, 하교길또는 퇴근길에 우산이 없어서 아무도 안쓰는 남는 우산을 썼다. 당신의 생각은?", "type": "SN", 
    "A": "내일 일찍 와서 제자리에 돌려놔야지", "B": "이 우산의 출처는 어딜까? 누가 어쩌다 두고 왜 안가져간거지? 우산이 핑크색인데 누구취향이지?"},
    6: {"title": "길을 걷고있는데, 누군가와 자꾸 눈이 마주친다. 당신의 생각은?", "type": "SN", 
    "A": "우연히 눈이 마주쳤나?", "B": "왜자꾸 쳐다보지? 옷이 이상한가? 뭐 묻었나? 나좋아하나?"},
    7: {"title": "그때, 눈이 마주친 그사람이 나에게 다가와서 학교길을 묻는다. 당신은?", "type": "TF", 
    "A": "아 저쪽으로 쭉가시면 돼요. (저쪽가서도 모르면 누구한테 또 물어보겠지)", "B": "잠시만 기다려주세요!(지도를 켜서 자세히 알려준다.)"},
    8: {"title": "친구가 애인과 헤어져 속상해 한다.", "type": "TF", 
    "A": "야 인생은 원래 혼자야 즐겨", "B": "서럽겠다 괜찮아? 혼자 있기 싫으면 언제든 말해"},
    9: {"title": "친구가 묘하게 기분이 안좋아보인다.", "type": "TF", 
    "A": "표정이 왜저러지? 내착각인가?(신경이 별로 안쓰인다.)", "B": "무슨일있어? (알아채고 위로해준다.)"},
    10: {"title": "가기로한 식당이 개인사정으로 휴무다.", "type": "JP", 
    "A": "얼른 그 주변 괜찮은 맛집을 찾아보고 닫혔는지 브레이크타임인지 웨이팅은 있는지 알아본다.", "B": "주변에 괜찮아보이는 식당 아무곳이나 들어간다."},
    11: {"title": "공부계획을 짤 때 당신은?", "type": "JP", 
    "A": "8시부터9시는 수학을 12p까지 끝내고 9시부터 10시는 국어 3단원 정독 해야지", "B": "오늘 수학 50p, 국어100p까지 가보자고"},
    12: {"title": "약속시간 10분전, 친구가 30분 정도 늦을 것같다고 연락왔다. 당신은?", "type": "JP", 
    "A": "이미 준비다했는데..30분이나 붕떴네 뭐하지ㅡㅡ", "B": "오히려 좋아. 느긋느긋 준비해야지"}
}
const result = {
    "ISTJ": {
        "img": "./img/istj.png"
    },
    "ISFJ": { "img": "./img/isfj.png"},
    "INFJ": {"img": "./img/infj.png"},
    "INTJ": { "img": "./img/intj.png"},
    "ISTP": {"img": "./img/istp.png"},
    "ISFP": {"img": "./img/isfp.png"},
    "INFP": {"img": "./img/infp.png"},
    "INTP": {"img": "./img/intp.png"},
    "ESTP": {"img": "./img/estp.png"},
    "ESFP": {"img": "./img/esfp.png"},
    "ENFP": {"img": "./img/enfp.png"},
    "ENTP": {"img": "./img/entp.png"},
    "ESTJ": {"img": "./img/estj.png"},
    "ESFJ": {"img": "./img/esfj.png"},
    "ENFJ": {"img": "./img/enfj.png"},
    "ENTJ": { 
        "img": "./img/entj.png"
    }
}


let num = 1;
let MBTI = '';

titleBtn.addEventListener("click",()=>{
    titleContainer.style.display="none";
    questionContainer.style.display="block";

    updateQuestion();
});

aBtn.addEventListener("click",()=>{
    switch(type.innerHTML){
        case "EI":
            let e = parseInt(EI.value)
            EI.setAttribute('value',e+1)
            break
        case "SN":
            let s = parseInt(SN.value)
            SN.setAttribute('value',s+1)
            break
        case "TF":
            let t = parseInt(TF.value)
            TF.setAttribute('value',t+1)
           break
        case "JP":
            let j = parseInt(JP.value)
            JP.setAttribute('value',j+1)
            break
        
            
    }
    updateQuestion();
});

bBtn.addEventListener("click",()=>{
    updateQuestion();
})

function updateQuestion(){
    if(num == 13){
        questionContainer.style.display='none';
        resultContainer.style.display='block';

        (EI.value >1 ? MBTI+='E':MBTI+='I');
        (SN.value >1 ? MBTI+='S':MBTI+='N');
        (TF.value >1 ? MBTI+='T':MBTI+='F');
        (JP.value >1 ? MBTI+='J':MBTI+='P');

        //MBTI.innerHTMl = MBTI;
        //explain.innerHTML = result[MBTI].explain;
        image.setAttribute('src',result[MBTI].img);
    } else {
        progress.setAttribute('value',parseInt(num))
        //pro.setAttribute('style',`width: calc(100/12*$(num)%);`)
        question.innerHTML = q[num].title;
        type.innerHTML = q[num].type;
        aBtn.innerHTML = q[num].A;
        bBtn.innerHTML = q[num].B;
        num++
    }
}
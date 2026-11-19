from admissions_records import L,flush_ru
pairs={
'Reading section':'Чтение','Writing section':'Письмо','Listening section':'Аудирование','Speaking section':'Устная речь',
'IELTS Academic / Online / UKVI; One Skill Retake accepted':'IELTS Academic / Online / UKVI; One Skill Retake принимается',
'IELTS Academic / Online; One Skill Retake accepted':'IELTS Academic / Online; One Skill Retake принимается',
'IELTS Academic / UKVI / Online; One Skill Retake listed':'IELTS Academic / UKVI / Online; One Skill Retake указан в списке',
'IELTS Academic / UKVI; One Skill Retake accepted':'IELTS Academic / UKVI; One Skill Retake принимается',
'IELTS Academic / online; One Skill Retake accepted':'IELTS Academic / online; One Skill Retake принимается',
'IELTS Academic in person; One Skill Retake accepted; Online not accepted':'IELTS Academic очно; One Skill Retake принимается; Online не принимается',
'IELTS Academic in person; Online and One Skill Retake not accepted':'IELTS Academic очно; Online и One Skill Retake не принимаются',
'IELTS Academic in-centre paper/computer':'IELTS Academic в центре, на бумаге или компьютере',
'IELTS Academic paper/computer in-centre':'IELTS Academic на бумаге или компьютере в центре',
'IELTS Academic; IELTS Online and Indicator not accepted':'IELTS Academic; IELTS Online и Indicator не принимаются',
'IELTS Academic; Indicator also listed':'IELTS Academic; Indicator также указан в списке',
'IELTS Academic; One Skill Retake accepted':'IELTS Academic; One Skill Retake принимается',
'IELTS Academic; One Skill Retake not accepted':'IELTS Academic; One Skill Retake не принимается',
'IELTS Academic; not Indicator, Online or One Skill Retake':'IELTS Academic; Indicator, Online и One Skill Retake не принимаются',
'IELTS online / paper; One Skill Retake accepted':'IELTS онлайн / на бумаге; One Skill Retake принимается',
'IELTS; Academic variant not specified in this table':'IELTS; вариант Academic в этой таблице не уточнён',
'IELTS; UKVI advised for Student visa':'IELTS; для Student visa рекомендуется UKVI',
'IELTS; confirm Academic variant for the chosen course':'IELTS; вариант Academic нужно уточнить для выбранного курса',
'IELTS; exact Academic test variant requires confirmation':'IELTS; точный вариант Academic требует подтверждения',
'IELTS; exact variant not named in the guide':'IELTS; точный вариант в руководстве не назван',
'TOEFL iBT / paper-based':'TOEFL iBT / бумажный тест',
'TOPIK / Korean alternatives':'TOPIK / альтернативные подтверждения корейского',
'EJU / Japanese examination':'EJU / экзамен по японскому',
'German during the degree':'Немецкий во время обучения на степени',
'TOPIK / Soongsil Korean proficiency':'TOPIK / экзамен Soongsil по корейскому'
}
for en,ru in pairs.items():L(en,ru)
flush_ru()

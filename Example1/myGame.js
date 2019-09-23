room = game.createRoom("room", "배경-1.png") // 방 생성
room2 = game.createRoom("room2", "배경-5.png")
com = game.createRoom("com", "컴퓨터-화면.png")

room.door = room.createObject("door", "문-오른쪽-닫힘.png") // 문 생성
room.door.setWidth(136) // 크기 조절
room.locateObject(room.door, 650, 235) // 문 배치
room.door.lock() // door 상태를 locked로 변경

room.door.onClick = function() { // door를 클릭했을 때
	if(room.door.isClosed()){ // door가 closed 상태이면
		room.door.open() // door의 상태를 open으로 바꿈
	} else if (room.door.isOpened()){ // door가 opened 상태이면
		game.clear() // 게임 클리어
	} else if (room.door.isLocked()){ // door가 locked 상태이면
		printMessage("문이 잠겨있다") // 메시지 출력
	}
}

room.door.onOpen = function() { // door 상태가 open으로 변경되면 실행
	room.door.setSprite("문-오른쪽-열림.png") // 열린 문으로 변경
}

room.keypad = room.createObject("keypad", "숫자키-우.png") // 오브젝트 생성
room.keypad.setWidth(50) // 크기 조절
room.locateObject(room.keypad, 750, 230) // 위치 변경

room.keypad.onClick = function() {
	printMessage("비밀번호를 입력하세요") // 클릭했을 때 출력
	showKeypad("number", "9175" , function(){
		room.door.unlock() // door의 잠금을 연다
		printMessage("잠금장치가 열리는 소리가 들렸다.") // 비밀번호를 풀었을 때 출력
	 })
}

room.table = room.createObject("table", "테이블-오른쪽.png")
room.table.setWidth(300)
room.locateObject(room.table, 1000, 400)

room.com = room.createObject("com", "맥-우.png")
room.com.setWidth(90)
room.locateObject(room.com, 1000, 275)

room.com.onClick = function(){
	game.move(com)
	printMessage("되돌아가려면 모니터 화면 클릭!")
}

com.monitor = com.createObject("monitor", "컴퓨터-화면.png")

com.monitor.onClick = function(){
	game.move(room)
}

com.txt = com.createObject("txt", "txt파일.png")
com.txt.setWidth(50)
com.locateObject(com.txt, 400, 220)

com.txt.onClick = function(){
	showImageViewer("메모장화면.png", "hello.txt")
}

com.taskbar = com.createObject("taskbar", "작업표시줄.png")
com.taskbar.setWidth(825)
com.locateObject(com.taskbar, 640, 505)

com.calendar = com.createObject("calendar", "달력.png")
com.calendar.setWidth(200)
com.locateObject(com.calendar, 953, 290)
com.calendar.hide()

com.taskbar.onClick = function(){
	com.calendar.show()
}

room.chair = room.createObject("chair", "의자1-5.png")
room.chair.setWidth(140)
room.locateObject(room.chair, 800, 400)

room.sofa = room.createObject("sofa", "소파2-2.png")
room.sofa.setWidth(280)
room.locateObject(room.sofa, 1070, 570)

room.remote = room.createObject("remote", "리모컨.png")
room.remote.setWidth(70)
room.locateObject(room.remote, 1010, 550)
room.remote.hide()
room.remote.onClick = function(){
	room.remote.pick()
	printMessage("건전지가 빠져있는 리모컨을 주웠다.")
}

room.sofa.onClick = function(){
	room.remote.show()
}

room.door2 = room.createObject("door2", "문-좌-닫힘.png")
room.door2.setWidth(125)
room.locateObject(room.door2, 200, 260)

room.door2.onClick = function() { // door를 클릭했을 때
	if(room.door2.isClosed()){ // door가 closed 상태이면
		room.door2.open() // door의 상태를 open으로 바꿈
		printMessage("문이 열려있다! 들어가보자!")
	} else if (room.door2.isOpened()){ // door가 opened 상태이면
		game.move(room2) // room2로 이동
		printMessage("어두우니 불을 켜주도록 하자! 리모컨을 이용하면 불을 킬 수 있을 것 같다.")
	} 
}

room.door2.onOpen = function() { 
	room.door2.setSprite("문-좌-열림.png")
}

room.trash_bascket = room.createObject("trash_bascket", "쓰레기통-우-닫힘.png")
room.trash_bascket.setWidth(160)
room.locateObject(room.trash_bascket, 500,335)

room.trash_bascket.onClick = function(){
	if(room.trash_bascket.isClosed()){
		room.trash_bascket.open()
	} else if(room.trash_bascket.isOpened()){
		room.trash_bascket.close()
	}
}

room.battery = room.createObject("battery", "건전지.png")
room.battery.setWidth(20)
room.locateObject(room.battery, 460, 290)
room.battery.hide()

room.trash = room.createObject("trash", "쓰레기.png")
room.trash.setWidth(30)
room.locateObject(room.trash, 485, 300)
room.trash.hide()

room.trash.onClick = function(){
	showImageViewer("종이2.png", "")
	printMessage("그냥 빈 종이다...")
}

room.battery.onClick = function(){
	room.battery.pick()
	printMessage("건전지를 주웠다!")
}

room.trash_bascket.onOpen = function(){
	room.trash_bascket.setSprite("쓰레기통-우-열림.png")
	room.trash.show()
	room.battery.show()
}

room.trash_bascket.onClose = function(){
	room.trash_bascket.setSprite("쓰레기통-우-닫힘.png")
	room.trash.hide()
	room.battery.hide()
}
////////////////////////////////////////////////////////////////////////////
room2.bg = room2.createObject("bg", "배경-5.png")
room2.setRoomLight(0.1)

room2.door = room2.createObject("door", "문-우-열림.png")
room2.door.setWidth(125)
room2.locateObject(room2.door, 850, 220)

room2.door.onClick = function() {
	game.move(room) 
}

room2.shelf = room2.createObject("shelf", "선반-좌.png")
room2.shelf.setWidth(460)
room2.locateObject(room2.shelf, 250, 150)

room2.book3 = room2.createObject("book3", "책1-1.png")
room2.book3.setWidth(80)
room2.locateObject(room2.book3, 210, 140)

room2.book2 = room2.createObject("book2", "책2-1.png")
room2.book2.setWidth(80)
room2.locateObject(room2.book2, 155, 135)

room2.book = room2.createObject("book", "책3-1.png")
room2.book.setWidth(80)
room2.locateObject(room2.book, 100, 140)

room2.remote = room2.createObject("remote", "리모컨.png")
room2.remote.hide()

if(game.getHandItem() == room2.remote){
	printMessage("배경을 클릭하면 불을 킬 수 있습니다.")
}

room2.bg.onClick = function() {
	if(game.getHandItem() == room2.remote){
		room2.setRoomLight(1)
		roomLight = true
	} else {
		printMessage("리모컨을 사용하면 불을 킬 수 있을지도...?")
	}
}

room2.box1 = room2.createObject("box1", "상자2-2-닫힘.png")
room2.box1.setWidth(150)
room2.locateObject(room2.box1, 1030, 488)

room2.box2 = room2.createObject("box2", "상자2-2-닫힘.png")
room2.box2.setWidth(150)
room2.locateObject(room2.box2, 1100, 500)

room2.box3 = room2.createObject("box3", "상자2-2-닫힘.png")
room2.box3.setWidth(150)
room2.locateObject(room2.box3, 1030, 400)

room2.box4 = room2.createObject("box4", "상자2-2-닫힘.png")
room2.box4.setWidth(150)
room2.locateObject(room2.box4, 1100, 412)

room2.box5 = room2.createObject("box5", "상자2-2-열림.png")
room2.box5.setWidth(150)
room2.locateObject(room2.box5, 1100, 323)


room2.driver_head = room2.createObject("driver_head", "드라이버비트.png")
room2.driver_head.setWidth(80)
room2.locateObject(room2.driver_head, 1100, 460)
room2.driver_head.hide()

room2.driver_head.onClick = function(){
	room2.driver_head.pick()
}

room2.box5.onClick = function(){
	if(room2.box5.isClosed()){
		room2.box5.moveX(-500)
		room2.box5.moveY(165)
		room2.box4.open()
		printMessage("빈 상자이다...")
		room2.box5.lock()
	} 
}

room2.box4.onClick = function(){
	if(room2.box4.isOpened()){
		room2.box4.moveX(-165)
		room2.box4.moveY(165)
		room2.box4.setSprite("상자2-2-열림.png")
		room2.box2.open()
		printMessage("빈 상자이다...")
		room2.box4.lock()
	} else if(room2.box4.isClosed()){
		printMessage("위에 있는 박스부터 확인해볼까?")
	} else if(room2.box4.isLocked()){
	}
}

room2.box2.onClick = function(){
	if(room2.box2.isOpened()){
		room2.box2.setSprite("상자2-2-열림.png")
		room2.driver_head.show()
		printMessage("드라이버 앞부분을 발견했다!")
		room2.box2.lock()
	} else if(room2.box2.isClosed()) {
		printMessage("위에 있는 박스부터 확인해볼까?")
	} else if(room2.box2.isLocked()) {
	}
}

room2.box3.onClick = function(){
	if(room2.box3.isClosed()){
		room2.box3.moveX(-165)
		room2.box3.moveY(165)
		room2.box3.setSprite("상자2-2-열림.png")
		room2.box1.open()
		printMessage("빈 상자이다...")
		room2.box3.lock()
	}
}

room2.box1.onClick = function(){
	if(room2.box1.isOpened()){
		room2.box1.setSprite("상자2-2-열림.png")
		printMessage("빈 상자이다...")
		room2.box1.lock()
	} else if(room2.box1.isClosed()) {
		printMessage("위에 있는 박스부터 확인해볼까?")
	} else if(room2.box1.isLocked()) {
	}
}

room2.driver = room2.createObject("driver", "드라이버.png")
room2.driver.hide()

room2.wood_box = room2.createObject("wood_box", "나무상자.png")
room2.wood_box.setWidth(100)
room2.locateObject(room2.wood_box, 300, 108)

room2.wood_box.onClick = function(){
	if(game.getHandItem() == room2.driver){
		room2.wood_box.setSprite("열린나무상자.png")
		room2.book4.show()
		printMessage("나무상자를 열었다!")
	} else {
		printMessage("나사로 봉인되어있는 나무상자다... 드라이버가 있으면 열 수 있을텐데...")
	}
}

room2.book4 = room2.createObject("book4", "책.png")
room2.book4.setWidth(60)
room2.locateObject(room2.book4, 310, 90)
room2.book4.hide()

room2.book4.onClick = function() {
	showImageViewer("종이.png", "") // 이미지 출력
}


////////////////////////////////////////////////////////////////////////
room.scratch = room.createObject("scratch", "긁힘자국.png")
room.scratch.setWidth(100)
room.locateObject(room.scratch, 90, 480)

room.cabinet = room.createObject("cabinet", "옷장-1-닫힘.png")
room.cabinet.setWidth(280)
room.locateObject(room.cabinet, 200, 260)
room.cabinet.lock()

room.cabinet.onOpen = function() { 
	room.cabinet.setSprite("옷장-1-열림.png") 
	room.driver_handle.show()
}

room.cabinet.onClose = function() { 
	room.cabinet.setSprite("옷장-1-닫힘.png") 
	room.driver_handle.hide()
}

room.scratchClick = false
room.cabinet.move = false

room.cabinet.onClick = function(){
	if(room.cabinet.isClosed()){ 
		room.cabinet.open() 
	} else if (room.cabinet.isOpened()){ 
		room.cabinet.close() 
	} else {
	}
	room.scratch.onClick = function(){
		room.scratchClick = true
		printMessage("긁힌 자국이 수상해보인다. 옷장을 밀어보자!")
		room.cabinet.onDrag = function(direction){
			if(direction == "Left" && room.cabinet.move == false){
				printMessage("옷장을 밀어버렸다!")
				room.cabinet.moveX(-200) // X 방향으로 200 이동
				room.locker.moveX(-200)
				room.driver_handle.moveX(-200)
				room.cabinet.moveY(40) // Y 방향으로 -40 이동
				room.locker.moveY(40)	
				room.driver_handle.moveY(40)
				room.cabinet.move = true
			} else {
				printMessage("더이상 밀리지 않는다.")
			}
		}
	}
	if(room.scratchClick == false && room.cabinet.move == false) {
		printMessage("무거워 보이는 옷장이다. 주변을 더 조사해보자!")
	}
}

room.locker = room.createObject("locker", "cryptex.png")
room.locker.setWidth(30)
room.locateObject(room.locker, 255, 210)

room.locker.onClick = function() {
	printMessage("네 자리 숫자 자물쇠로 잠겨있다... 네 자리면 생일이려나...?") 
	showKeypad("number", "1030" , function(){
		room.cabinet.unlock() 
		room.locker.hide()
		printMessage("잠금장치가 열리는 소리가 들렸다.") 
	 })
}

room.driver_handle = room.createObject("driver_handle", "드라이버손잡이.png")
room.driver_handle.setWidth(30)
room.locateObject(room.driver_handle, 260, 300)
room.driver_handle.hide()

room.driver_handle.onClick = function(){
	room.driver_handle.pick()
	printMessage("드라이버 손잡이를 주웠다!")
}


game.makeCombination(room.battery, room.remote, room2.remote)
game.makeCombination(room.driver_handle, room2.driver_head, room2.driver)

game.start(room) // 게임시작
printMessage("방탈출에 오신 것을 환영합니다!")
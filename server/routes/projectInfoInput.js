/**
 * Created by rex.ni on 2017/2/26.
 */
/**
 * Created by rex.ni on 2016/12/12.
 */
const express = require('express');
const router = express.Router();
const projectInfoInput = require('../controllers/projectInfoInput');



/* GET home page. */
// router.get('/',shiftInputHistory.show);

router.get('/list',projectInfoInput.list);

router.get('/edit/:id',projectInfoInput.edit);

router.post('/update',projectInfoInput.update);

router.post('/addInput',projectInfoInput.addInput);

router.get('/delete/:id',projectInfoInput.delete);
/*
router.get('/editShiftInputHistory/:id',shiftInputHistory.EditShiftInputHistory);

router.get('/delete/:id',shiftInputHistory.delete);
*/

module.exports = router;
